
<template>
  <div id="app">

    <v-app>
      <v-app-bar color="deep-purple accent-4" dense dark>


        <v-toolbar-title class="title">UNISEL TimeTable</v-toolbar-title>
        <v-spacer></v-spacer>
        <span class="mr-3">Contribute</span>
        <span class="mr-3"><v-btn href="https://github.com/vicevirus/UNISEL-TimeTable-REST-Scraper" variant="outlined">API</v-btn></span>
        <span class="mr-3"><v-btn href="https://github.com/vicevirus/UNISEL-TimeTable-Vue" variant="outlined">Vue</v-btn></span>
      </v-app-bar>

      <div class="boxSpace"></div>
      <div class="boxSpace"></div>
      <div class="wrapper">

        <v-card style="text-align: center; ">

          <h3 style="font-family: 'Montserrat', sans-serif">Campus</h3>

          <v-divider thickness="1px" color="purple"></v-divider>
          <p style="font-size: 15px">Semester: <b>{{ semesterCode }}</b></p>
          <v-card-text>
            <v-alert color="grey lighten-2" v-if="!selectedCampus" text="Please select a campus"></v-alert>

            <v-container :fluid="true">
              <div class="radio-group">

                <div class="boxSpace" style="height: 3vh"></div>
                <div>
                  <label class="radio-label">
                    <input type="radio" id="campus-SA" value="SA" v-model="selectedCampus" class="radio-input">
                    <span class="radio-custom"></span>
                    Shah Alam
                  </label>
                  <label class="radio-label">
                    <input type="radio" id="campus-BJ" value="BJ" v-model="selectedCampus" class="radio-input">
                    <span class="radio-custom"></span>
                    Bestari Jaya
                  </label>
                  <label class="radio-label">
                    <input type="radio" id="campus-F" value="F" v-model="selectedCampus" class="radio-input">
                    <span class="radio-custom"></span>
                    Foundation
                  </label>
                </div>
              </div>
              <div class="boxSpace" style="height: 1vh"></div>
            </v-container>
            <div v-if="selectedCampus">

              <v-container>
                <v-autocomplete auto-select-first ref="input" label="Subject" v-model="selectedSubject" :items="subjects"
                  item-text="subject" variant="solo" item-value="index" placeholder="Select Subject" clearable
                  :style="{ 'max-width': '100%', 'height': '10vh' }">






                </v-autocomplete>

                <v-btn color="orange" @click="selectedSubject = ''" rounded="lg">
                  <i class="material-icons">
                    clear
                  </i>
                  Clear

                </v-btn>
                <div class="boxSpacer" style="height: 3vh;"></div>
                <v-alert><b>Note: </b>Scroll the table horizontally/vertically if it's too big.</v-alert>
              </v-container>

            </div>
          </v-card-text>
        </v-card>



      </div>
      <v-container :fluid="true" class="timetable-container">

        <v-responsive v-if="selectedSubject !== '' && selectedCampus == 'BJ' || selectedCampus == 'F'">
          <v-table class="timetable">

            <thead>

              <tr>
                <!-- span -->
                <th class="xAxis">Day</th>
                <th class="xAxis">08:00</th>
                <th class="xAxis">09:00</th>
                <th class="xAxis">10:00</th>
                <th class="xAxis">11:00</th>
                <th class="xAxis">12:00</th>
                <th class="xAxis">13:00</th>
                <th class="xAxis">14:00</th>
                <th class="xAxis">15:00</th>
                <th class="xAxis">16:00</th>
                <th class="xAxis">17:00</th>
                <th class="xAxis">18:00</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="day in daysOfWeek" :key="day">
                <td>{{ day.slice(0, 3) }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][0] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][1] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][2] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][3] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][4] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][5] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][6] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][7] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][8] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][9] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][10] || '-' }}</td>


              </tr>

            </tbody>
          </v-table>
        </v-responsive>



        <div v-if="selectedSubject !== '' && selectedCampus == 'SA'">
          <v-table class="timetable">
            <thead>
              <tr>
                <th class="xAxis">Day</th>
                <th class="xAxis">08:00</th>
                <th class="xAxis">09:00</th>
                <th class="xAxis">10:00</th>
                <th class="xAxis">11:00</th>
                <th class="xAxis">12:00</th>
                <th class="xAxis">13:00</th>
                <th class="xAxis">14:00</th>
                <th class="xAxis">15:00</th>
                <th class="xAxis">16:00</th>
                <th class="xAxis">17:00</th>
                <th class="xAxis">18:00</th>


              </tr>
            </thead>
            <tbody>
              <tr v-for="day in daysOfWeek" :key="day">
                <td>{{ day.slice(0, 3) }}</td>

                <td>{{ timeData[selectedSubject][day.toLowerCase()][0] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][1] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][2] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][3] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][4] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][5] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][6] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][7] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][8] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][9] || '-' }}</td>
                <td>{{ timeData[selectedSubject][day.toLowerCase()][10] || '-' }}</td>

              </tr>
              <tr></tr>
            </tbody>
          </v-table>


        </div>
      </v-container>

    </v-app>


  </div>
</template>

<script>

import axios from "axios";
import vSelect from "vue-select";

export default {
  components: {
    vSelect,
  },
  data() {
    return {
      campuses: ["SA", "BJ"],
      selectedCampus: "",
      semesterCode: "",
      searchInput: null,
      selected: '',
      subjects: [],
      selectedSubject: "",
      timetableData: {},
      timeData: {},
      daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    };
  },
  methods: {
    async updateSubjects() {
      try {
        if (!this.selectedCampus) {
          return;
        }
        const response = await axios.get("https://uniseltimetableapi.duckdns.org:8000/latest_semester_codes");
        const latestSemesterCode = response.data[this.selectedCampus][0]
        this.semesterCode = latestSemesterCode;


        // Update the API URL with the latest semester code
        const apiUrl = `https://uniseltimetableapi.duckdns.org:8000/timetable_data/${this.selectedCampus}/${latestSemesterCode}`;
        const response2 = await axios.get(apiUrl);

        this.timetableData = response2.data;

        const campusData = this.timetableData;
        this.subjects = this.timetableData.subjects.map(
          (subject, index) => ({ title: subject.subject, index: index })
        );
        this.selectedSubject = this.subjects.length ? this.subjects[0].index : "";

        this.timeData = campusData.subjectsTime

      } catch (error) {
        console.error("Error fetching timetable data:", error);
      }
    },
    reset() {
      this.selectedSubject = ""; // clear the selectedSubject property
      this.$refs.input.search = 'Default Value';
    },

  },
  computed: {},
  watch: {
    selectedCampus() {
      this.updateSubjects();
    },

  },
  created() {
    this.updateSubjects();
  },
};
</script>

<style>
@import "vue-select/dist/vue-select.css";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.radio-group {
  margin-top: -2rem;
  margin-bottom: -2rem;
}

.radio-label {
  display: inline-block;
  position: relative;
  padding-left: 30px;
  margin-right: 15px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
}

.radio-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.radio-custom {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

}

.radio-input:checked~.radio-custom {
  background-color: #1E88E5;
  box-shadow: 0 2px 4px rgba(30, 136, 229, 0.4);
}

.radio-custom:after {
  content: "";
  position: absolute;
  display: none;
}

.radio-input:checked~.radio-custom:after {
  display: block;
}

.radio-custom:after {
  top: 6px;
  left: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.title {
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-weight: bold;
}

.mr-3 {
  font-size: 16px;
  color: white;
  margin-left: 10px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  font-family: "Helvetica Neue", Arial, sans-serif;

}

.boxSpace {
  height: 5vh;
}

#subject-select {

  min-width: 500px;
}


@media (max-width: 600px) {

  .timetable th,
  .timetable td {
    font-size: 5px;
  }
}



.timetable {
  width: 190vh;
  table-layout: fixed;
  border-collapse: collapse;
  margin: auto;
  overflow-x: auto;

}


.timetable th,
.timetable td {

  border: 1px solid black;
  text-align: center;
  font-size: 13px;
  word-wrap: break-word;
}

.timetable th {
  background-color: #ccc;
}


.xAxis {
  min-width: 80px;
}
</style>
