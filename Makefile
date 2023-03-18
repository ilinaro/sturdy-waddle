build:
	docker build  -t next_front .

run:
	docker rm -f ffcontainer
	docker run -d -p 82:3000 --name ffcontainer -i next_front

start:
	docker start ffcontainer

stop:
	docker stop ffcontainer