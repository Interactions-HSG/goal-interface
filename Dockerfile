FROM python:3.8.14-bullseye
#COPY requirements.txt /
# RUN apt update && apt install -y iproute2 procps
#RUN pip3 install --no-cache-dir -r requirements.txt
#COPY dlt_client.py /
ADD . /
ENTRYPOINT ["python3"]
CMD [ "-m http.server"]