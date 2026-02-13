
comprimento = {
    "mm": 0.001,
    "cm": 0.01,
    "m": 1,
    "km": 1000,
    "in": 0.0254,
    "ft": 0.3048,
    "yd": 0.9144,
    "mi": 1609.34
}

massa = {
    "mg": 0.000001,
    "g": 0.001,
    "kg": 1,
    "t": 1000,
    "lb": 0.453592
}

volume = {
    "ml": 0.001,
    "l": 1,
    "m3": 1000,
    "cm3": 0.001,
    "tsp": 0.00492892,
    "tbsp": 0.0147868,
    "cup": 0.24
}

def converter_temperatura(valor, de, para):
    if de == para:
        return valor
    if de == "c" and para == "f":
        return valor * 9 / 5 + 32
    if de == "f" and para == "c":
        return (valor - 32) * 5 / 9
    if de == "c" and para == "k":
        return valor + 273.15
    if de == "k" and para == "c":
        return valor - 273.15
    if de == "f" and para == "k":
        return (valor - 32) * 5 / 9 + 273.15
    if de == "k" and para == "f":
        return (valor - 273.15) * 9 / 5 + 32

tempo = {
    "ms": 0.001,
    "s": 1,
    "min": 60,
    "h": 3600,
    "dia": 86400,
    "semana": 604800,
    "mes": 2592000,
    "ano": 31536000
}

velocidade = {
    "m/s": 1,
    "km/h": 0.277778
}

area = {
    "mm2": 0.000001,
    "cm2": 0.0001,
    "m2": 1,
    "km2": 1_000_000,
    "ha": 10_000
}

armazenamento = {
    "b": 1,
    "B": 8,
    "KB": 8 * 1024,
    "MB": 8 * 1024**2,
    "GB": 8 * 1024**3,
    "TB": 8 * 1024**4
}

energia = {
    "j": 1,
    "cal": 4.184,
    "kcal": 4184,
    "w": 1,
    "kw": 1000,
    "kwh": 3_600_000
}

dinheiro = {
    "BRL": 1,
    "USD": 5.0,
    "EUR": 5.5,
    "GBP": 6.3,
    "JPY": 0.035,
    "ARS": 0.006,
    "CAD": 3.7
}

def formatar_numero(valor):
    return f"{valor:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")

def converter(valor, de, para, tabela):
    valor_base = valor * tabela[de]
    resultado = valor_base / tabela[para]
    resultado = round(resultado, 2)
    return formatar_numero(resultado)


