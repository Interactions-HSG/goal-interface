FROM python:3.8.14-bullseye
# Insert dependencies into requirements.txt
COPY requirements.txt /
RUN pip3 install --no-cache-dir -r requirements.txt
# Add the whole project tree
ADD . /
ENTRYPOINT ["python3"]
CMD [ "-m","http.server"]
EXPOSE 8000
