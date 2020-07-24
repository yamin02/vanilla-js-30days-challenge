from random_word import RandomWords
r = RandomWords()
 ans = r.get_random_words()    #Print a large arrray
from numpy import random 
arr =[]
list1 = {'first','last','change','LTP','EPS'}
yam2 = dict.fromkeys(list1, 0)
dic= {}
for p in range(7):
    arr.append(yam2)
for i in range(5):
    arr.append()
for i in range(7):
    for p in list1:
        arr[i][p] = random.randint(low=44,high=99)
    arr[i]['first'] = random.choice(['yain','ansu','benteke','shakiri','lena','lambo'])
    arr[i]['last'] = random.choice(['zuker','madden','ragge','bloom','finzu','fati'])
 
print(arr)