/* UTM */
(function () {
    const paramsUTM = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    if (paramsUTM.utm_id) sessionStorage.setItem("utm_id", paramsUTM.utm_id);
    if (paramsUTM.utm_medium) sessionStorage.setItem("utm_medium", paramsUTM.utm_medium);
    if (paramsUTM.utm_source) sessionStorage.setItem("utm_source", paramsUTM.utm_source);
    if (paramsUTM.utm_campaign) sessionStorage.setItem("utm_campaign", paramsUTM.utm_campaign);
    if (paramsUTM.utm_content) sessionStorage.setItem("utm_content", paramsUTM.utm_content);
    if (paramsUTM.utm_term) sessionStorage.setItem("utm_term", paramsUTM.utm_term);
    if (paramsUTM.gad_source) sessionStorage.setItem("gad_source", paramsUTM.gad_source);
    if (paramsUTM.gclid) sessionStorage.setItem("gclid", paramsUTM.gclid);
    if (paramsUTM.fbclid) sessionStorage.setItem("fbclid", paramsUTM.fbclid);
    if (paramsUTM.msclkid) sessionStorage.setItem("msclkid", paramsUTM.msclkid);

})();

function getTrackingParams() {

    const tracking = {
        utm_medium: sessionStorage.getItem("utm_medium"),
        utm_source: sessionStorage.getItem("utm_source"),
        utm_campaign: sessionStorage.getItem("utm_campaign"),
        utm_content: sessionStorage.getItem("utm_content"),
        utm_term: sessionStorage.getItem("utm_term"),
        gad_source: sessionStorage.getItem("gad_source"),
        gclid: sessionStorage.getItem("gclid"),
        fbclid: sessionStorage.getItem("fbclid"),
        msclkid: sessionStorage.getItem("msclkid")
    }

    for (const [key, value] of Object.entries(tracking)) {
        if (value === null) delete tracking[key]
    }

    return new URLSearchParams(tracking);
}

function getTrackingParamsObject() {
    return {
        utm_id: sessionStorage.getItem("utm_id"),
        utm_medium: sessionStorage.getItem("utm_medium"),
        utm_source: sessionStorage.getItem("utm_source"),
        utm_campaign: sessionStorage.getItem("utm_campaign"),
        utm_content: sessionStorage.getItem("utm_content"),
        utm_term: sessionStorage.getItem("utm_term"),
        gad_source: sessionStorage.getItem("gad_source"),
        gclid: sessionStorage.getItem("gclid"),
        fbclid: sessionStorage.getItem("fbclid"),
        msclkid: sessionStorage.getItem("msclkid")
    }
}

/* REQUEST */

function makeRequest(opts, retry = 3) {
    return new Promise(function (resolve, reject) {
        retry--;

        var xhr = new XMLHttpRequest();
        xhr.open(opts.method, opts.url);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                if (retry === 0) {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                }
                else {
                    return makeRequest(opts, retry).then((res) => {
                        resolve(res)
                    }).catch((err) => {
                        reject(err)
                    })
                }
            }
        };
        xhr.onerror = function () {
            if (retry === 0) {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            }
            else {
                return makeRequest(opts, retry).then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            }
        };
        if (opts.headers) {
            Object.keys(opts.headers).forEach(function (key) {
                xhr.setRequestHeader(key, opts.headers[key]);
            });
        }
        var params = opts.params;
        // We'll need to stringify if we've been given an object
        // If we have a string, this is skipped.
        if (params && typeof params === 'object') {
            params = Object.keys(params).map(function (key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
            }).join('&');
        }
        xhr.send(params);
    });
}

function parseRequest(response) {
    try {
        if (typeof response === "boolean") return response;
        const Jsonresponde = JSON.parse(response);
        const { data } = Jsonresponde;
        if (typeof data === 'string') return JSON.parse(data);
        return {data}
    } catch (error) {
        return response;
    }
}

/* Format Date Time */

function getDateIsoFormat(year, month, date, hour = 0, minute = 0, seconds = 0) {

    //month is zero base 
    const mont_base_zero = month - 1;

    const datetime = new Date(year, mont_base_zero, date, hour, minute, seconds);
    return datetime.toISOString();
}


/** Persisting prospect info */
function setProspect(prospect) {
    stringProspect = JSON.stringify(prospect);
    sessionStorage.setItem("prospect", stringProspect)
}

function getProspect() {
    const prospect = sessionStorage.getItem("prospect");
    return JSON.parse(prospect)
}

/** Persisting product Catalog */
function setProductCatalog(products) {
    stringProducts = JSON.stringify(products);
    sessionStorage.setItem("products", stringProducts);
}

function getProductCatalog() {
    const products = sessionStorage.getItem("products");
    return JSON.parse(products);
}

/** Persisting Total Protection insurance selected */
function addTotalTotalProtectionInsurance(insurance) {
    //Obtiene seguros del storage
    const insurances = getTotalProtectionInsurance();
    // Agrega el nuevo item
    if (!insurances.includes(insurance)) insurances.push(insurance)

    // guarda en el storage
    setTotalProtectionInsurance(insurances)
}

function removeTotalTotalProtectionInsurance(insurance) {
    const insurances = getTotalProtectionInsurance();
    const newInsurances = insurances.filter(e => e !== insurance);
    setTotalProtectionInsurance(newInsurances);

}

function setTotalProtectionInsurance(insurances) {
    stringInsurance = JSON.stringify(insurances);
    sessionStorage.setItem("insurances", stringInsurance);
}

function getTotalProtectionInsurance() {
    const insurances = sessionStorage.getItem("insurances") || "[]";
    return JSON.parse(insurances);
}

function setTotalProtectionProducts(products) {
    stringProducts = JSON.stringify(products);
    sessionStorage.setItem("products", stringProducts);
}

function getTotalProtectionProducts() {
    const products = sessionStorage.getItem("products") || "[]";
    return JSON.parse(products);
}

/*
Persistir la información de la calculadora
*/

function setCalculatorData(name, data) {
    stringData = JSON.stringify(data);
    sessionStorage.setItem(name, stringData);
}

function getCalculatorData(name) {
    const data = sessionStorage.getItem(name);
    if (data) return JSON.parse(data);
    return null;

}

/* Guarda la informacion de fondo de mergencia */

function setEmergencyFund(fund) {
    stringFund = JSON.stringify(fund);
    sessionStorage.setItem("emergencyFund", stringFund)
}

function getEmergencyFund() {
    const prospect = sessionStorage.getItem("emergencyFund");
    return JSON.parse(prospect)
}