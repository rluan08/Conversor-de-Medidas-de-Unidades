document.addEventListener("DOMContentLoaded", () => {

    const unidades = {
        comprimento: {
            mm: "Milímetro (mm)",
            cm: "Centímetro (cm)",
            m: "Metro (m)",
            km: "Quilômetro (km)",
            in: "Polegada (in)",
            ft: "Pé (ft)",
            yd: "Jarda (yd)",
            mi: "Milha (mi)"
        },
        massa: {
            mg: "Miligrama (mg)",
            g: "Grama (g)",
            kg: "Quilograma (kg)",
            t: "Tonelada (t)",
            lb: "Libra (lb)"
        },
        volume: {
            ml: "Mililitro (ml)",
            l: "Litro (L)",
            m3: "Metro cúbico (m³)",
            cm3: "Centímetro cúbico (cm³)",
            tsp: "Colher de chá (tsp)",
            tbsp: "Colher de sopa (tbsp)",
            cup: "Xícara (cup)"
        },
        temperatura: {
            c: "Celsius (°C)",
            f: "Fahrenheit (°F)",
            k: "Kelvin (K)"
        },
        tempo: {
            ms: "Milissegundo (ms)",
            s: "Segundo(s)",
            min: "Minuto ",
            h: "Hora",
            dia: "Dia",
            semana: "Semana",
            mes: "Mês",
            ano: "Ano"
        },
        velocidade: {
            "m/s": "Metros por segundo (m/s)",
            "km/h": "Quilômetros por hora (km/h)"
        },
        area: {
            mm2: "Milímetro quadrado (mm²)",
            cm2: "Centímetro quadrado (cm²)",
            m2: "Metro quadrado (m²)",
            km2: "Quilômetro quadrado (km²)",
            ha: "Hectare (ha)"
        },
        armazenamento: {
            b: "Bit (b)",
            B: "Byte (B)",
            KB: "Kilobyte (KB)",
            MB: "Megabyte (MB)",
            GB: "Gigabyte (GB)",
            TB: "Terabyte (TB)"
        },
        energia: {
            j: "Joule (J)",
            cal: "Caloria (cal)",
            kcal: "Quilocaloria (kcal)",
            w: "Watt (W)",
            kw: "Quilowatt (kW)",
            kwh: "Quilowatt-hora (kWh)"
        },
        dinheiro: {
            BRL: "Real (BRL)",
            USD: "Dólar Americano (USD)",
            EUR: "Euro (EUR)",
            GBP: "Libra Esterlina (GBP)",
            JPY: "Iene Japonês (JPY)",
            ARS: "Peso Argentino (ARS)",
            CAD: "Dólar Canadense (CAD)"
        }
    };

    const categoria = document.getElementById("categoria");
    const de = document.getElementById("de");
    const para = document.getElementById("para");
    const resultado = document.getElementById("resultado");

    Object.keys(unidades).forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = cat.toUpperCase();
        categoria.appendChild(opt);
    });

    function carregar() {
        de.innerHTML = "";
        para.innerHTML = "";

        Object.entries(unidades[categoria.value]).forEach(([sigla, nome]) => {
            const o1 = new Option(nome, sigla);
            const o2 = new Option(nome, sigla);
            de.add(o1);
            para.add(o2);
        });
    }

    categoria.value = "comprimento";
    carregar();
    categoria.addEventListener("change", carregar);

    window.converter = function () {
        const valor = document.getElementById("valor").value;
        const erro = document.getElementById("erro");

    // valida valor vazio ou inválido
    if (valor === "" || Number(valor) <= 0) {
        erro.style.display = "block";
        document.getElementById("resultado").innerHTML = "";
        return;
    }

    erro.style.display = "none";
        fetch("/converter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                categoria: categoria.value,
                valor: valor,
                de: de.value,
                para: para.value
            })
        })
        .then(res => res.json())
        .then(data => {
            resultado.innerText =
                `${data.resultado} ${unidades[categoria.value][para.value]}.`;
        });
    };

});
document.getElementById("valor").addEventListener("input", () => {
    document.getElementById("erro").style.display = "none";
});
