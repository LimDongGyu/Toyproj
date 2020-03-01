/**
 * 
 * ! 2020-03-01
 * 
 * https://hub.docker.com/
 * 
 * docker 명령어
 * docker container run <docker-image-name> <command>
 * 
 * docker container run ubuntu:latest /bin/echo 'Hello world'
 * docker ps -a
 * docker system df
 *   ㄴ 이미지, 컨테이너 디스크 사용량
 * docker image ls
 * docker images
 * docker image [ pull | push ]
 * docker image inspect <이미지명>   --> 이미지 스펙 검사
 * docker search <이미지명>          --> 이미지 찾기
 * docker image rm <이미지명>        --> 이미지 삭제
 * docker image prune               --> 사용하지 않는 모든 이미지 삭제
 * docker login/logout
 * 
 * 
 * ? 이미지를 다운로드하고 도커 컨테이너를 시작하기
 * - docker pull <이미지명:태그(버전)명>                  --> 이미지 다운로드 
 * - docker run --name <컨테이너> -d -p 80:80 <이미지명>  --> 컨테이너 이름 생성 -d: detach(백그라운드 실행), -p : port
 * - docker [start | stop | restart] <컨테이너명>
 * - docker container [pause | unpause] <컨테이너명>
 * 
 * docker pull nginx
 * docker images   or docker image ls
 * docker container run --name <컨테이너명> -d -p 80:80 nginx        --> nginx 이름을 가진 이미지 웹서버 실행 
 * docker ps -al
 * docker [top | stats] <컨테이너명>
 * 
 * docker container rm <컨테이너명>      --> 컨테이너 삭제
 * docker container prune <컨테이너명>   --> 멈춰있는 모든 컨테이너 삭제
 * 
 * 
 * 
 * docker container로 들어가기
 * docker container run -it --name <컨테이너명> <이미지명> <명령>  --> i : 화면 상에 입력을 받기 위한 input, t : 화면상의 표준출력(interactive한 실행)
 * --> --name <컨테이너명> : 컨테이너명 지정, default 시, 랜덤으로 지정
 *   [예시]
 *   docker container run -it --name "test1" centos /bin/cal
 *   docker container run -it --name "test2" centos /bin/bash
 * 
 * docker container run -it --restart=always --name <컨테이너명> <이미지명> <명령>  --> 이 이미지 기반으로 컨테이너를 매번 재시작하라
 * docker container run -itd --name <컨테이너명> <이미지>
 * docker container attach <컨테이너명>  --> 컨테이너에 들어가는 것
 *   ㄴ exit(kill), ctrl+p, ctrl+q : detach
 * docker start <컨테이너명>
 * docker exec -it <컨테이너명> <명령>  --> 러닝 컨테이너 실행
 * docker port <컨테이너명>  --> 포트번호 출력
 * docker rename <이전컨테이너명> <바꿀컨테이너명>
 * 
 * 
 * 
 * ? 파일 복사/공유
 * 
 * docker cp <컨테이너명>:<path> <client-path>
 * docker cp <client-path> <컨테이너명>:<path>
 * 
 * 디렉토리 공유
 * docker run -v <localpath>:<container-path>
 * 
 * 
 * ? mysql
 * docker pull mysql:5.7 
 * docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root --name <컨테이너명> <이미지명>
 *   ㄴ docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root --name mysql mysql:5.7  --> -e : 환경변수
 * docker ps
 * docker exec -it mysql bash
 *   ㄴ which mysql    ===> which 어디있어? ===> path에 걸려있다? ===> 어디서든 사용할 수 있음
 *   ㄴ cat /etc/issue ===> Debian Linux
 *   ㄴ mysql -u root -proot
 *   ㄴ show databases; show tables; select host, user from user;
 *   ㄴ quit
 */

