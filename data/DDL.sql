drop table if exists rotacult;
create table rotacult;
use rotacult;

 create table lugares( 
id int primary key auto_increment,
nome varchar(200),
localizacao varchar(200),
rota varchar(500),
imagem text(5000),
avaliacao int,
horario varchar(50),
classificacao varchar(50),
categoria varchar(100),
preco varchar(100),
regiao varchar(100)
);


create table administrador(
id int primary key auto_increment,
usuario varchar(200),
senha varchar(100)
);

create table usuario(
 id int primary key auto_increment,
 nome varchar(200),
 email varchar(200) unique,
 senha varchar(100)
 );

create table comentario(
 id_comentario int primary key auto_increment,
email varchar(200),
comentario varchar(1000),
id_lugar int,
foreign key (id_lugar) references lugares(id),
foreign key (email) references usuario(email)
 );


