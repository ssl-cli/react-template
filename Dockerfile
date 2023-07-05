FROM node:14.17.5

ENV PORT 3000
ENV WORK_DIR /app
ARG OSS_AccessKey_ID
ARG OSS_AccessKey_Secret
ENV OSS_AccessKey_ID=$OSS_AccessKey_ID
ENV OSS_AccessKey_Secret=$OSS_AccessKey_Secret

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
  && echo Asia/Shanghai > /etc/timezone \
  && dpkg-reconfigure -f noninteractive tzdata

WORKDIR ${WORK_DIR}

ADD . ${WORK_DIR}

RUN npm install
RUN npm run build

VOLUME /app/log
EXPOSE 3000

CMD ["npm", "start"]
