FROM node:19-bullseye

ADD . /
ENTRYPOINT ["npm"]
CMD ["start"]