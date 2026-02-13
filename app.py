from flask import Flask, render_template, request, jsonify
import converter

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/converter", methods=["POST"])
def converter_api():
    dados = request.json

    categoria = dados["categoria"]
    valor = float(dados["valor"])
    de = dados["de"]
    para = dados["para"]

    if categoria == "temperatura":
        resultado = converter.converter_temperatura(valor, de, para)
    else:
        tabela = converter.__dict__[categoria]
        resultado = converter.converter(valor, de, para, tabela)

    return jsonify({"resultado": resultado})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

