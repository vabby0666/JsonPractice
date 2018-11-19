from functools import reduce
from random import shuffle
import random
import itertools
import sys

#Python program to sum all the items in a list
def sum_of_list_elements(l):
    return sum(l)

#Python program to multiplies all the items in a list
def mul_of_list_elements(l):
    return reduce(lambda x, y: x*y, l)

#Python program to get the largest and smallest number from a list.
def min_and_max(l):
    return [min(l),max(l)]

#Python program to find given string is a palindrome or not
def palindrome(k):
	return k==k[::-1]

#Python program to count the number of strings where the string length is 2 or more and the first and last character are same from a given list of strings
def count_string_morethan2_12same(l1):
    return len([i for i in l1 if(len(i)>2 and i[0]==i[len(i)-1])])

#Python program to get a list, sorted in increasing order by the last element in each tuple from a given list of non-empty tuples.
def increase_by_lastelement_tuple(l2):
    return sorted(l2,key=lambda i:i[1])

#Python program to remove duplicates from a list
def remove_duplicates_from_list(l3):
    return list(set(l3))

#Python program to check a list is empty or not
def list_empty_check(l4):
    if len(l4)==0:
	    return "empty"
    return "not empty"

#Python program to clone or copy a list
def list_clone(l5):
    l6=[]+l5
    return l6

#Python program to find the list of words that are longer than n from a given string.
def words_longer_than_n(ex,n):
    l7=ex.split()
    return [i for i in l7 if(len(i)>n)]

#Python function that takes two lists and returns True if they have at least one common member
def common_member_in_lists(l8,l9):
    return len([i for i in l8 if(i in l9)])>0

#Python program to print a specified list after removing the 0th, 2nd, 4th and 5th elements
def removing_some_elements_from_list(la):
    del la[5]
    del la[4]
    del la[2]
    del la[0]
    return la

#string as input.remove all non-alphabets in a string
def remove_non_alpha_numeric(st):
    return ''.join([i for i in st if(i.isalnum())])

#Python program to print the numbers of a specified list after removing even numbers from it
def removing_even_numbers_from_list(lb):
    return [i for i in lb if(i%2!=0)]

#Python program to shuffle and print a specified list
def shuffle_list(lc):
    lc1=[]+lc
    shuffle(lc)
    return lc1!=lc

#Python program to generate and print a list of first and last 5 elements where the values are square of numbers between 1 and 30 (both included)
def first_and_last_five_of_squares_1to30():
    ld=[i**2 for i in range(1,31)]
    return ld[:5]+ld[-5:]

#Write a Python program to generate and print a list except the first 5 elements, where the values are square of numbers between 1 and 30 (both included).
def except_first_five_of_squares_1to30():
    ld=[i**2 for i in range(1,31)]
    return ld[5:]

#Python program to generate all permutations of a list in Python
def permutation_of_list(le):
    return list(itertools.permutations(le))

#Python program to get the difference between the two lists
def diff_btw_two_lists(lf1,lf2):
    return list(set(lf2)-set(lf1))

#Python program access the index of a list.
def access_index_of_list(lg,n):
    return lg[n]

#Python program to convert a list of characters into a string
def convert_list_to_string(lh):
    return ''.join(lh).strip()

#Python program to find the index of an item of a specified list
def find_index_of_iten_in_list(lg,n):
    return lg.index(n)

#write a function to remove all adjacent duplicate values
def remove_adjacent_duplicates(lh):
    return [lh[i] for i in range(len(lh)) if(lh[i]!=lh[i-1])]

#Python program to append a list to second list
def append_list_to_second_list(li1,li):
    return li+li1

#Python program to select an item randomly from a list.
def random_element_from_list(lj):
    return random.choice(lj) in lj

#python program to check whether two lists are circularly identical
def circularly_identical(list1,list2):
    list1=list1*2
    l=len(list2)
    for i in range(len(list1)-l):
	    if(list1[i:i+l]==list2):
		    return True
    return False
#testing
def test_sum_of_list_elements():
    assert 10 == sum_of_list_elements([1,2,3,4])

def test_mul_of_list_elements():
    assert 24 == mul_of_list_elements([1,2,3,4])

def test_min_and_max():
    assert [1,9] == min_and_max([1,2,3,4,5,9,6])

def test_palindrome():
    assert True == palindrome("madam")
    assert False == palindrome("hello")

def test_count_string_morethan2_12same():
    assert 2 == count_string_morethan2_12same(['abc', 'xyz', 'aba', '1221'])

def test_increase_by_lastelement_tuple():
    assert [(2, 1), (1, 2), (2, 3), (4, 4), (2, 5)] ==increase_by_lastelement_tuple([(2, 5), (1, 2), (4, 4), (2, 3), (2, 1)])

def test_remove_duplicates_from_list():
    assert [1,2,3,4,5,6,7,8] == remove_duplicates_from_list([1,2,2,3,4,5,6,6,8,8,7])

def test_list_empty_check():
    assert "not empty"==list_empty_check([1,2,3])
    assert "empty" == list_empty_check([])

def test_list_clone():
    assert [1,2,3] == list_clone([1,2,3])

def test_words_longer_than_n():
    assert ['quick','brown','jumps','over','lazy']  == words_longer_than_n("The quick brown fox jumps over the lazy dog",3)

def test_common_member_in_lists():
    assert True==common_member_in_lists([1,2,3],[4,5,6,3])
    assert False==common_member_in_lists([1,2,3],[4,5,6])

def test_removing_some_elements_from_list():
    assert ['Green', 'Black'] == removing_some_elements_from_list(['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow'])

def test_remove_non_alpha_numeric():
    assert "123abc" == remove_non_alpha_numeric('123,#$abc')

def test_removing_even_numbers_from_list():
    assert [3,1,5] == removing_even_numbers_from_list([3,4,2,1,6,5])

def test_shuffle_list():
    assert True == shuffle_list([1,2,3,4,5,6])
    assert False == shuffle_list([])

def test_first_and_last_five_of_squares_1to30():
    assert [1, 4, 9, 16, 25, 676, 729, 784, 841, 900] == first_and_last_five_of_squares_1to30()

def test_except_first_five_of_squares_1to30():
    assert [36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900] == except_first_five_of_squares_1to30()

def test_permutation_of_list():
    assert [(1, 2), (2, 1)] == permutation_of_list([1,2])

def test_diff_btw_two_lists():
    assert [4,6] == diff_btw_two_lists([1,2,3],[3,2,1,4,6])

def test_access_index_of_list():
    assert 3 == access_index_of_list([1,2,3,4],2)

def test_convert_list_to_string():
    assert "cat" == convert_list_to_string(['c','a','t'])

def test_find_index_of_iten_in_list():
    assert 2 == find_index_of_iten_in_list([1,2,3,4],3)

def test_remove_adjacent_duplicates():
    assert [1,2,5,2,6,3,2,6,9] == remove_adjacent_duplicates([1,2,2,5,2,6,6,6,3,2,6,9])

def test_append_list_to_second_list():
    assert [1,2,3,4,5,6] == append_list_to_second_list([4,5,6],[1,2,3])
    assert [1, 2, 4, 5] == append_list_to_second_list([4, 5], [1, 2])

def test_random_element_from_list():
    assert True == random_element_from_list([1,2,3])

def test_circularly_identical():
    assert True == circularly_identical([10, 10, 0, 0, 10],[10, 10, 10, 0, 0])
    assert False == circularly_identical([10, 10, 0, 0, 10],[1, 10, 10, 0, 0])



