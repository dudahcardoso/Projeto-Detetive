sleep(10)
console.log('Olá, aconteceu um crime nessa cidade, a Carla foi assassinada brutalmente, eu estou encarregado de investigar esse crime, por isso preciso te fazer algumas perguntas... Vamos lá!')
sleep(5)
pergunta1 = prompt('Você telefonou para a vítima? [S/N] ').strip().upper()[0])
pergunta2 = prompt('Você esteve no local do crime? [S/N] ').strip().upper()[0])
pergunta3 = prompt('Você mora perto da vítima? [S/N] ').strip().upper()[0])
pergunta4 = prompt('Você devia para a vítima? [S/N] ').strip().upper()[0])
pergunta5 = prompt('Você já trabalhou com a vítima? [S/N] ').strip().upper()[0])
cont = 0

if(pergunta1 == 'S')
   cont += 1
if(pergunta2 == 'S')
   cont += 1
if(pergunta3 == 'S')
   cont += 1
if(pergunta4 == 'S')
   cont += 1
if(pergunta5 == 'S')
   cont += 1

if(cont == 2)
   print('Você é suspeito do crime!')
elif 3 <= cont <= 4:
   print('Você é cúmplice do crime!')
elif cont == 5:
   print('Você é o assassino!')
else: 
   print('Você é inocente de todas as acusações!')