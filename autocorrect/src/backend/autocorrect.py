import flask
import nltk
import re
import pattern 
from patter.en import lemma, lexeme
from nltk.stem import WordNetLemmatizer

nltk.download('all')

# words - all from the text
w = []

with open('final.txt', mode='r', encoding='utf-8') as f:
    file_name_data = f.read()
    file_name_data = file_name_data.lower()
    w = re.findall('\w+', file_name_data)
    
main_set = set(w)


def counting_word(words):
    word_count = {}
    for word in words:
        if word in word_count:
            word_count[word] += 1
        else:
            word_count[word] = 1
    return word_count

# probability of each word
def prob_cal(word_count_dict):
    probs = {}
    totes = sum(word_count_dict.values())
    for key in word_count_dict.keys():
        probs[key] = word_count_dict[key] / totes
        
    return probs

# extract and add root word
def LemmWord(word):
    return list(lexeme(wd) for wd in word.split())[0]

# deleting letter
def DeleteLetter(word):
    delete_list = []
    split_list = []
    
    # deleting ith letter from word
    for i in range(len(word)):
        split_list.append((word[0:i], word[i:]))
        
    # basically joining back the fragments tgt except one letter doesn't exist lol
    for a, b in split_list:
        delete_list.append(a + b[1:])
    
    return delete_list