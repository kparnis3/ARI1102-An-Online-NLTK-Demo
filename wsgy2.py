import cgi
import json
from langdetect import detect
import nltk
POS1 = []
nltk.data.path.append('/home/wyverncore/nltk_data/')

def getPostDataAsJson(environ):
    post_json = {}
    storage = cgi.FieldStorage(fp=environ['wsgi.input'], environ=environ, keep_blank_values=True)

    for k in storage.keys():
        post_json[k] = storage.getvalue(k)

    return (post_json)


def application(environ, start_response):
    form_params = getPostDataAsJson(environ)
    for x in form_params.values():
        v = x
        if (v!=""):
         if (detect(v) == "en"):
           v = nltk.tokenize.sent_tokenize(x)

           for sentence in v:
            tokenized_text = nltk.word_tokenize(sentence)
            POS1.append(nltk.pos_tag(tokenized_text, tagset='universal'))
            POS2 = nltk.pos_tag(tokenized_text)
            POS1.append(nltk.chunk.tree2conlltags(nltk.ne_chunk(POS2)))
         else:
            POS1.append("1")

    conttype = 'application/json'
    response_body = [bytes(json.dumps(POS1), encoding='utf-8')]
    POS1.clear()
    content_length = sum([len(s) for s in response_body])

    status = '200 OK'
    response_header = [('Content-type', conttype), ('Content-Length', str(content_length))]
    start_response(status, response_header)


    return response_body
