from random_word import RandomWords
r = RandomWords()
# ans = r.get_random_words()  Print a large arrray
from numpy import random 
arr =[]
list1 = {'first','last','change','LTP','EPS'}
yam2 = dict.fromkeys(list1, 0)
dic= {}
# for p in range(7):
#     arr.append(yam2)
    # yam2['first'] = "shifa"
    # yam2['last'] = "taora safa"
# for i in range(5):
#     arr.append()
arr=[{'LTP': 0, 'EPS': 0, 'change': 0, 'last': 0, 'first': 14}, {'LTP': 0, 'EPS': 0, 'change': 0, 'last': 0, 'first': 14}, {'LTP': 0, 'EPS': 0, 'change': 
0, 'last': 0, 'first': 14}, {'LTP': 0, 'EPS': 0, 'change': 0, 'last': 0, 'first': 14}, {'LTP': 0, 'EPS': 0, 'change': 0, 'last': 0, 'first': 14}, {'LTP': 0, 'EPS': 0, 'change': 0, 'last': 0, 'first': 14}, {'LTP': 0, 'EPS': 0, 'change': 0, 'last': 0, 'first': 14}]
for i in range(7):
    for p in list1:
        arr[i][p] = random.randint(low=44,high=99)
    arr[i]['first'] = random.choice(['yamin','ansu','benteke','shakiri','lena','lambo'])
    arr[i]['last'] = random.choice(['zulker','madden','ragge','bloom','finzu','fati'])
 
print(arr)