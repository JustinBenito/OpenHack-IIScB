#define BLYNK_TEMPLATE_ID "TMPL3iUxlaLGT"
#define BLYNK_TEMPLATE_NAME "Agriculture Monitor"
#define BLYNK_AUTH_TOKEN "3Nc8SK4W8Nz5NlZgcz0k9EM8ck40AGgI"

#include "DHT.h"
#include <WiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleEsp32.h>
char auth[]="3Nc8SK4W8Nz5NlZgcz0k9EM8ck40AGgI";
char ssid[]="iotdata";
char pass[]="12345678";


DHT dht(12, DHT11);

float Moisval;
float ph;
float temp;
float humi;

void updatePh() {
  String dat;

  if (Serial2.available()) {
    if (Serial2.read() == 'P') {
      dat = Serial2.readStringUntil(',');
      Serial.println(dat);
      dat.remove(0, 2);
      Sensor.ph = dat.toFloat();
      /*if(Sensor.ph>20)
        {
        Sensor.ph = 0;
        }*/
      Serial.print("pH = ");
      Serial.println(Sensor.ph);
      dat = "";
    }
  }
}



void setup() {
    Serial.begin(9600);
  Serial2.begin(9600);
  Blynk.begin(auth, ssid, pass);
  dht.begin()
}

void loop() {
  getPH();
  Moisval=analogRead(34);
  Moisval=Moisval/40.95;
  Moisval= map(Moisval, 0, 100, 100, 0);
  humi=dht.readHumiditiy();
  temp=dht.readTemperature();
  if(isnan(humi) || isnan(temp)){
    Serial.printf("Not Working");
    return;
  }

  // Serial.print("Soil Moisture:");
  // Serial.println(MoistureSensor.Value);
  // Serial.print(F("Humidity: "));
  // Serial.println(Sensor.humi);
  // Serial.print(F("Temperature: "));
  // Serial.print(Sensor.tem);
  // Serial.println(F("°C "));

  Blynk.run();
  Blynk.virtualWrite(V0, temp);
  Blynk.virtualWrite(V1, humi);
  Blynk.virtualWrite(V2, Moisval);
  Blynk.virtualWrite(V3, ph);
}
