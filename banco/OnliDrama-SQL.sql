create database onlyDrama;

use onlyDrama;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45), constraint chkemail check (email like '%@%'),
senha varchar(45), constraint chksenha check ( senha >= 8)
);

create table filme(
idFilme int primary key auto_increment,
nomeFilme varchar(45),
diretor varchar(45),
autor varchar(45),
genero varchar(45),
idioma varchar(45),
dtLancamento date
)auto_increment = 10;

create table drama(
idDrama int primary key auto_increment,
nomeDrama varchar(45),
genero varchar(45),
autor varchar(45),
emissora varchar(45),
idioma varchar(45),
dtLancamento date
)auto_increment = 20;

create table musica(
idMusica int primary key auto_increment,
nomeMusica varchar(45),
artista varchar(45),
dtLancamento date
)auto_increment = 30;

create table votacao(
idVotacao int auto_increment,
fkUsuario int,
primary key (idVotacao,fkUsuario),
fkFilme int,
flDrama int,
fkMusica int,
dtHoraVotacao datetime,
notaFilme decimal(10,2),
notaDrama decimal(10,2),
notaMusica decimal(10,2)
)auto_increment = 40;

select * from usuario;
select * from filme;
select * from drama;
select * from musica;
select * from votacao;

-- insertes vem apartir daqui