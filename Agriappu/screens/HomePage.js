import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  LogBox
} from "react-native";
import translate from 'translate-google-api';
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import 'react-native-url-polyfill/auto'
import axios from 'axios';

console.disableYellowBox=true;
console.error = (error) => error.apply;

LogBox.ignoreAllLogs(['Warning: ...']);
LogBox.ignoreAllLogs();



const HomePage = () => {
  const navigation = useNavigation();
  const [temperature, setTemperature] = React.useState(95);
  const [currentDay, setCurrentDay] = React.useState('');

//api

  const [co, setCO] = React.useState(0);
  const [no2, setNO2] = React.useState(0);
  const [so2, setSO2] =React.useState(0);
  const [o3, seto3]=React.useState(0);

//farconnect

const [temp, setTemp]=React.useState(0);
const [humidity, setHumid]=React.useState(0);
const [soil, setSoil]=React.useState(0);
const [ph, setPH]=React.useState(0);

const [uzha,setUzha]=React.useState('');


  React.useEffect(() => {
    const interval = setInterval(fetchDataAndUpdate, 1000);
    fetchWeatherData();
    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);

//   React.useEffect(()=>{
// setTimeout(calluzhavan, 2000);
//   })

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=57b13983b93d4a3582e163244232106&q=Chennai&aqi=yes');
      const data = response.data;
      const currentTemperature = data.current.temp_c;
      setTemperature(currentTemperature);
      const currentDate = new Date();
      
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
      setCurrentDay(currentDayOfWeek);
     
     //api data
      const coValue = data.current.air_quality.co;
      const no2Value = data.current.air_quality.no2;
      const so2Value = data.current.air_quality.so2;
      const o3=data.current.air_quality.o3;
      setCO(coValue);
      setNO2(no2Value);
      setSO2(so2Value);
      seto3(o3);
    
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };

  let responses={}

  const fetchDataAndUpdate = async () => {
    try {
      const response = await axios.get('https://blynk.cloud/external/api/get?token=3Nc8SK4W8Nz5NlZgcz0k9EM8ck40AGgI&v0&v1&v2&v3');
      const { v0, v1, v2, v3 } = response.data;
      setTemp(v0);
      setHumid(v1);
      setSoil(v2);
      setPH(v3);
      console.log('call');

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calluzhavan = async () =>{
const userInput=`The Temperature value is ${temp} degree celsius, The Humidity percentage is ${humidity}%, and the PH of the soil is ${ph}, based on this data since you are an excellent AI with a lot of knowledge, give me 
crop recommendations for this soil, How much water and humidity is needed to make the environment suitable for crop growth, From this data tell me if there are any diseases that would arise and how to solve it. Finally How to optimise the nutrient content. 
Give me in bullet points and in less than 500 words, give me conscise answer, without any extra things
Dont give me any intro or conclusion or outro, just the content`;

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `http://0.0.0.0/uzhavan?q=${userInput}`,
  headers: { }
};

axios.request(config)
.then((response) => {
  responses=JSON.stringify(response.data);
})

const result = await translate(responses.data.choices[0].text, {
  from: 'en',
  to: 'ta',
});
const tamil = result.toString();
setUzha(tamil);
console.log(responses.data.choices[0].text);
  
  }


  return (
    <ScrollView
      style={[styles.homepage, styles.homepageLayout]}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.homePageScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.image1Wrapper}>
          <Image
            style={[styles.image1Icon, styles.homepageLayout]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
        </View>
        <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.fWrapper}>
              <Text style={styles.f}>{temperature}° C</Text>
            </View>
            <View style={styles.frameContainer}>
              <View style={[styles.fridayWrapper, styles.wrapperLayout]}>
                <Text style={styles.friday}>{currentDay}</Text>
              </View>
              <View style={[styles.chennaiIndiaWrapper, styles.wrapperLayout]}>
                <Text
                  style={[styles.chennaiIndia, styles.chennaiIndiaTypo]}
                >{`Chennai
India`}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.pollutionLevelsParent}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.pollutionLevels}>
          <View
            style={[styles.pollutionLevelsWrapper, styles.wrapperSpaceBlock]}
          >
            <Text
              style={[styles.pollutionLevels1, styles.chennaiIndiaTypo]}
              numberOfLines={1}
            >
              Pollution Levels
            </Text>
          </View>
          
                <View style={styles.frameView}>
        <View style={styles.frameParentFlexBox}>
          <View style={styles.frameParent2}>
            <View style={styles.frameChild} />
            <View style={styles.carbonMonoxideWrapper}>
              <Text style={styles.ppm2Typo} numberOfLines={1}>
                Carbon monoxide
              </Text>
            </View>
          </View>
          <View style={styles.carbonMonoxideWrapper}>
            <Text style={styles.ppm2Typo} numberOfLines={1}>
              {co.toFixed(2)}ppm
            </Text>
          </View>
        </View>
        <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
          <View style={styles.frameParent2}>
            <View style={styles.frameChild} />
            <View style={styles.carbonMonoxideWrapper}>
              <Text style={styles.ppm2Typo} numberOfLines={1}>
                Nitrogen Dioxide
              </Text>
            </View>
          </View>
          <View style={styles.carbonMonoxideWrapper}>
            <Text style={styles.ppm2Typo} numberOfLines={1}>
              {no2.toFixed(2)}ppm
            </Text>
          </View>
        </View>
        <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
          <View style={styles.frameParent2}>
            <View style={styles.frameChild} />
            <View style={styles.carbonMonoxideWrapper}>
              <Text style={styles.ppm2Typo} numberOfLines={1}>
                Sulphur Dioxide
              </Text>
            </View>
          </View>
          <View style={styles.carbonMonoxideWrapper}>
            <Text style={[styles.ppm2, styles.ppm2Typo]} numberOfLines={1}>
              {so2.toFixed(2)}ppm
            </Text>
          </View>
        </View>
        <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
          <View style={styles.frameParent2}>
            <View style={styles.frameChild} />
            <View style={styles.carbonMonoxideWrapper}>
              <Text style={styles.ppm2Typo} numberOfLines={1}>
                Ozone
              </Text>
            </View>
          </View>
          <View style={styles.carbonMonoxideWrapper}>
            <Text style={styles.ppm2Typo} numberOfLines={1}>
              {o3.toFixed(2)}ppm
            </Text>
          </View>
        </View>
      </View>
    </View>

        <View style={[styles.farconnect1, styles.frameParentSpaceBlock]}>
          <View style={[styles.farconnectWrapper, styles.wrapperSpaceBlock]}>
            <Text
              style={[styles.pollutionLevels1, styles.chennaiIndiaTypo]}
              numberOfLines={1}
            >{`FarConnect`}</Text>
          </View>
          <View style={styles.frameParentFlexBox}>
            <View style={styles.frameParent2}>
              <View style={styles.frameChild} />
              <View style={styles.carbonMonoxideWrapper}>
                <Text style={styles.ppm2Typo} numberOfLines={1}>
                  Temperature
                </Text>
              </View>
            </View>
            <View style={styles.carbonMonoxideWrapper}>
              <Text style={styles.ppm2Typo} numberOfLines={1}>
                {temp} °C
              </Text>
            </View>
          </View>
          <View style={styles.frameParentFlexBox}>
            <View style={styles.frameParent2}>
              <View style={styles.frameChild} />
              <View style={styles.carbonMonoxideWrapper}>
                <Text style={styles.ppm2Typo} numberOfLines={1}>
                  Humidity
                </Text>
              </View>
            </View>
            <View style={styles.carbonMonoxideWrapper}>
              <Text style={styles.ppm2Typo} numberOfLines={1}>
                {humidity}%
              </Text>
            </View>
          </View>
          <View style={styles.frameParentFlexBox}>
            <View style={styles.frameParent2}>
              <View style={styles.frameChild} />
              <View style={styles.carbonMonoxideWrapper}>
                <Text style={styles.ppm2Typo} numberOfLines={1}>
                  Soil Moisture
                </Text>
              </View>
            </View>
            <View style={styles.carbonMonoxideWrapper}>
              <Text style={styles.ppm2Typo} numberOfLines={1}>
                {soil}%
              </Text>
            </View>
          </View><View style={styles.frameParentFlexBox}>
            <View style={styles.frameParent2}>
              <View style={styles.frameChild} />
              <View style={styles.carbonMonoxideWrapper}>
                <Text style={styles.ppm2Typo} numberOfLines={1}>
                  PH
                </Text>
              </View>
            </View>
            <View style={styles.carbonMonoxideWrapper}>
              <Text style={styles.ppm2Typo} numberOfLines={1}>
                {ph}
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent13, styles.frameParentSpaceBlock]}>
          <View style={[styles.uzhavanSpeaksWrapper, styles.wrapperSpaceBlock]}>
            <Text
              style={[styles.pollutionLevels1, styles.chennaiIndiaTypo]}
              numberOfLines={1}
            >
              Uzhavan Speaks
            </Text>
          </View>
          <View style={styles.frameParent14}>
            <View style={styles.frameWrapper1}>
              <View style={styles.frameParent15}>
                <View style={styles.unsplashgkxkbyCDkWrapper}>
                  <Image
                    style={styles.unsplashgkxkbyCDkIcon}
                    contentFit="cover"
                    source={require("../assets/unsplashgkxkbycdk.png")}
                  />
                </View>
                <Text style={[styles.uzhavan, styles.uzhavanTypo]}>
                  Uzhavan
                </Text>
              </View>
            </View>
            <View style={styles.cropsSuitableForYourRegionWrapper}>
              <Text
                style={[styles.cropsSuitableFor, styles.uzhavanTypo]}
              >{uzha}</Text>
            </View>
          </View>
        </View>
       
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 40,
    paddingVertical: 19,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  homePageScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  homepageLayout: {
    maxWidth: "100%",
    width: "100%",
    flex: 1,
  },
  headerShadowBox: {
    paddingVertical: Padding.p_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  frameSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
  },
  wrapperLayout: {
    width: 314,
    justifyContent: "center",
  },
  chennaiIndiaTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.black,
    textAlign: "center",

  },
  wrapperSpaceBlock: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  ppm2Typo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.black,
    textAlign: "center",
  },
  frameParentSpaceBlock: {
    marginTop: 27,
    alignSelf: "stretch",
  },
  uzhavanTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  homeTypo: {
    marginTop: 7,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  image1Icon: {
    maxHeight: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  image1Wrapper: {
    height: 225,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  f: {
    fontSize: 64,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: "#6f8861",
    textAlign: "left",
  },
  fWrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  friday: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interMedium,
    color: Color.black,
    fontWeight: "500",
    textAlign: "left",
  },
  fridayWrapper: {
    backgroundColor: Color.white,
    alignItems: "center",
  },
  chennaiIndia: {
    fontSize: 16,
    width: 109,
  },
  chennaiIndiaWrapper: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  frameContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  frameGroup: {
    height: 145,
    paddingVertical: 0,
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameWrapper: {
    borderRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 329,
    marginTop: -82,
    backgroundColor: Color.white,
    paddingVertical: Padding.p_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  frameParent: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  pollutionLevels1: {
    fontSize: FontSize.size_xl,
  },
  pollutionLevelsWrapper: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameChild: {
    borderRadius: Border.br_81xl,
    width: 26,
    height: 25,
    backgroundColor: Color.green,
    overflow: "hidden",
  },
  carbonMonoxideWrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  frameParent2: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent3: {
    marginTop: 10,
  },
  ppm2: {
    width: 70,
  },
  frameView: {
    height: 204,
    alignSelf: "stretch",
  },
  pollutionLevels: {
    zIndex: 3,
    alignSelf: "stretch",
  },
  farconnectWrapper: {
    alignSelf: "stretch",
    flex: 1,
  },
  farconnect1: {
    height: 188,
    zIndex: 2,
    justifyContent: "center",
  },
  uzhavanSpeaksWrapper: {
    height: 46,
    alignItems: "center",
    alignSelf: "stretch",
  },
  unsplashgkxkbyCDkIcon: {
    width: 38,
    height: 38,
  },
  unsplashgkxkbyCDkWrapper: {
    padding: Padding.p_3xs,
  },
  uzhavan: {
    color: Color.green,
  },
  frameParent15: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameWrapper1: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  cropsSuitableFor: {
    color: Color.black,
  },
  cropsSuitableForYourRegionWrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent14: {
    alignSelf: "stretch",
    flex: 1,
    marginVertical: 10, 
  },
  frameParent13: {
    borderRadius: Border.br_3xs,
    padding: 25,
    zIndex: 1,
    backgroundColor: Color.white,
    flex: 1,
  },
  identifyPlantDiseaseWrapper: {
    width: 394,
    height: 44,
    alignItems: "center",
  },
  findIt: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.robotoMedium,
    color: Color.gray_100,
    fontWeight: "500",
    textAlign: "center",
  },
  findItWrapper: {
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_30xl,
    paddingVertical: Padding.p_smi,
    backgroundColor: Color.green,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent16: {
    zIndex: 0,
  },
  pollutionLevelsParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  homepage: {
    backgroundColor: "#f0f0f0",
  },
});

export default HomePage;
