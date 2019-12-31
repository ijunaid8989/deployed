<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2 col-xs-12">
        <ul class="timeline-v2">
          <li v-for="deploy in deploys" :data-date="dataFormation(deploy.created_at)">
            <div>
              <div class="media">
                <div class="media-left">
                  <a href="javascript:void(0);">
                    <v-gravatar class="media-object rounded-circle" :email="deploy.authorEmail" />
                  </a>
                </div>
                <div class="media-body align-middle" :data-time="unixParse(deploy.authorUnixTimestamp)">
                  <p><strong>{{ deploy.authorName }}</strong></p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  async asyncData () {
    const { data } = await axios.get('/v1/server/deployed')
    return { deploys: data.deploys }
  },
  methods: {
    dataFormation (date) {
      return moment(date).format('dddd')
    },
    unixParse (date) {
      return moment.unix(date).local().format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}
</script>

<style>

body {
  background-color: #f5f5f5 !important;
  font-family: 'Roboto', sans-serif !important;
}

.container {
  padding-top: 40px;
  padding-bottom: 40px;
}

.timeline-v2 {
  margin-bottom: 0;
  list-style: none;
  padding-left: 140px;
  padding-right: 20px;
  position: relative;
}

.timeline-v2 .media {
  padding: 20px;
  background-color: #fff;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.025);
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.025);
}

.timeline-v2 .media-object {
  width: 45px;
  height: 45px;
}

.timeline-v2 .media-body[data-time]::after {
  content: attr(data-time);
  position: absolute;
  top: 0;
  right: -10px;
  padding: 5px 10px;
  font-size: 10px;
  color: #fff;
  background-color: #2196f3;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
}

.timeline-v2 .media-body p:last-child {
  margin-bottom: 0;
}

.timeline-v2 > li {
  position: relative;
}

.timeline-v2 > li[data-date]::before {
  content: attr(data-date);
  position: absolute;
  top: 44px;
  right: 100%;
  margin-right: 20px;
  white-space: nowrap;
  font-weight: 300;
  font-size: 12px;
  color: #777;
}

.timeline-v2 > li[data-date] > div .media::before {
  content: '';
  position: absolute;
  top: 47px;
  left: -25px;
  width: 12px;
  height: 12px;
  background-color: #f5f5f5;
  border: 2px solid #2196f3;
  z-index: 1;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition-property: top, left, width, height, border-color;
  transition-property: top, left, width, height, border-color;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
}

.timeline-v2 > li[data-date] > div + div .media::before {
  border-color: #4caf50;
}

.timeline-v2 > li[data-date] > div .media:hover::before,
.timeline-v2 > li[data-date] > div + div .media:hover::before {
  border-color: #f44336;
}

.timeline-v2 > li:not(:last-child) > div:before, .timeline-v2 > li:last-child > div:not(:last-child)::before {
  content: '';
  position: absolute;
  top: 53px;
  left: -20px;
  height: 100%;
  border: 1px solid #e8e8e8;
}

.timeline-v2 > li:not(:last-child) > div:not(:last-child):before, .timeline-v2 > li:last-child > div:not(:last-child)::before {
  border-style: dashed;
}

.timeline-v2 > li > div {
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
}

.timeline-v2 > li > div::after {
  content: '';
  position: absolute;
  top: 47px;
  left: -6px;
  border-style: solid;
  border-width: 6px 6px 6px 0;
  border-color: transparent #fff transparent transparent;
}

.timeline-v2 > li > div:hover .media-body[data-time]::after {
  background-color: #f44336;
}

.media-middle {
  vertical-align: middle;
}

.media-body, .media-left, .media-right {
  display: table-cell;
  vertical-align: top;
}

.media-body {
  width: 10000px;
}

.media, .media-body {
  overflow: hidden;
  zoom: 1;
}

@media (max-width: 767px) {
  .timeline-v2 {
    padding-left: 30px;
  }
  .timeline-v2 > li[data-date]::before {
    margin-right: auto;
    -webkit-transform: rotate(-90deg) translate(50%, -20px);
    transform: rotate(-90deg) translate(50%, -20px);
    -webkit-transform-origin: right;
    transform-origin: right;
  }
}
</style>
