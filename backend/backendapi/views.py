from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from .models import Book, Author
from .serializers import BookSerializer, AuthorSerializer
import json

from rest_framework.decorators import api_view

@api_view(['GET'])
def welcome(request):
  content = { 'message': 'Capestart assignment App!' }
  return JsonResponse(content, status=200)

@api_view(['GET'])
def book_list(request):
    books = Book.objects.all()
    bookserializer = BookSerializer(books, many=True)
    return JsonResponse(bookserializer.data, status=200, safe=False)

@api_view([ 'GET'])
def author_list(request):
    authors = Author.objects.all()
    authorserializer = AuthorSerializer(authors, many=True)
    return JsonResponse(authorserializer.data, status=200, safe=False)

@api_view(['POST'])
def create_book(request):
    book_data = JSONParser().parse(request)
    bookserializer = BookSerializer(data=book_data)
    if bookserializer.is_valid():
        bookserializer.save()
        return JsonResponse(bookserializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(bookserializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_author(request):
    author_data = JSONParser().parse(request)
    authorserializer = AuthorSerializer(data=author_data)
    if authorserializer.is_valid():
        authorserializer.save()
        return JsonResponse(authorserializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(authorserializer.errors, status=status.HTTP_400_BAD_REQUEST)
