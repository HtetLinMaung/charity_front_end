<template>
  <div class="sidebar">

    <!-- Desktop size -->
    <v-layout v-if="!$vuetify.breakpoint.xs" row wrap>
      <v-col class="card_sidebar" justify="end">
        <v-card>
          <v-toolbar color="#63B995" dark flat>
            <template>
              <v-tabs class="tab_sidebar" v-model="model" left slider-color="#423E28" background-color="transparent">
                <v-tab :href="`#tab-${1}`">Stories</v-tab>
                <v-tab :href="`#tab-${2}`">Instant Donation</v-tab>
              </v-tabs>
            </template>
          </v-toolbar>
          <v-tabs-items v-model="model">
            <v-tab-item :value="`tab-${1}`">
              <v-card flat class="card_inside">
                <v-card-text>
                  <v-list
                    max-width="300"
                    :two-line="twoLine"
                    :shaped="shaped"
                    :flat="flat"
                    :inactive="inactive"
                    :nav="nav"
                    :avatar="avatar">
                    <v-list-item-group v-model="item" color="primary">
                      <v-list-item v-for="(item, i) in items" :key="i">
                        <v-list-item-avatar v-if="avatar">
                          <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title v-html="item.title"></v-list-item-title>
                          <v-list-item-subtitle v-if="twoLine || threeLine" v-html="item.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item :value="`tab-${2}`">
              <v-card flat class="card_inside">
                <v-card-text>
                  <v-list
                    max-width="300"
                    :two-line="twoLine"
                    :shaped="shaped"
                    :flat="flat"
                    :inactive="inactive"
                    :nav="nav"
                    :avatar="avatar">
                    <v-list-item-group v-model="item" color="primary">
                      <v-list-item v-for="(item, i) in items" :key="i">
                        <v-list-item-avatar v-if="avatar">
                          <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title v-html="item.title"></v-list-item-title>
                          <v-list-item-subtitle v-if="twoLine || threeLine" v-html="item.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
        <br>
        <v-card class="card_sidebar_donator">
          <v-card-title><v-list-item-subtitle><v-icon color="#FFDF00" class="mb-1">mdi-trophy-award</v-icon> Our Main Donors</v-list-item-subtitle></v-card-title>
          <v-carousel class="mx-auto" :show-arrows="false" :hide-delimiters="true" :cycle="true">
            <v-carousel-item
              v-for="(donor,i) in donors"
              :key="i"
              :src="donor.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-layout>
    

    <!-- Mobile size -->
    <v-layout class="hidden-sm-and-up" row wrap align-center>
      <v-col class="card_sidebar_mobile">
        <v-card :flat="flat" :outlined="outlined" :raised="raised">
          <v-layout>
            <v-avatar class="ma-4" round v-for="(item, i) in items" :key="i">
              <img :class="{ selected: item.selected }" @click="selectedContact(i)" :src="item.avatar" alt="John"/>
            </v-avatar>
          </v-layout>
        </v-card>
      </v-col>
    </v-layout>
    <v-layout v-if="instant_donate > 0" class="hidden-sm-and-up bs_instant_mobile" row wrap align-center>
      <v-bottom-sheet v-model="sheet">
        <template v-slot:activator="{ on }">
          <v-btn color="#FB6542" dark v-on="on" >
            Emergency Donation available
          </v-btn>
        </template>
        <v-list class="instant_classitems_mobile">
          <v-subheader>Instant Need Lists</v-subheader>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            @click="sheet = false"
          >
            <v-list-item-avatar class="">
              <v-avatar size="32px" tile>
                <img :class="{ selected: item.selected }" @click="selectedContact(i)" :src="item.avatar" alt="John"/>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>
    </v-layout>


  </div>
</template>

<script>
export default {
  data: () => ({
    instant_donate: 3,
    sheet: false,
    model: "tab-1",
    item: 5,
    twoLine: true,
    shaped: true,
    flat: true,
    inactive: true,
    nav: true,
    avatar: true,
    flat: true,
    outlined: true,
    raised: true,
    elevation: 4,
    oldSelectedId: 0,
    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        selected: false
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        selected: false
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        selected: false
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        selected: false
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        selected: false
      }
    ],
    donors: [
      {
        src: require("@/assets/donors/Screenshot_1.jpg"),
      },
      {
        src: require("@/assets/donors/Screenshot_2.jpg"),
      },
      {
        src: require("@/assets/donors/Screenshot_3.jpg"),
      },
      {
        src: require("@/assets/donors/Screenshot_4.jpg"),
      },
      {
        src: require("@/assets/donors/Screenshot_5.jpg"),
      },
    ],
  }),
  methods: {
    selectedContact(id) {
      this.items[this.oldSelectedId].selected = false;
      this.items[id].selected = true;
      this.oldSelectedId = id;
    }
  }
};
</script>
<style>
/* Desktop */
.card_sidebar {
  position: fixed;
  top: 0;
  margin-top: 65px;
  right: 0;
  width: auto;
}
.card_sidebar .v-card {
  margin-right: 5rem;
  border-radius: 10px;
}
.card_sidebar .card_inside {
  margin-right: 0rem;
}
.card_sidebar .primary--text {
  height: 220px;
  overflow-y: scroll;
}
.card_sidebar ul {
  list-style-type: none;
}
.card_sidebar .tab_sidebar {
  width: 340px;
}
.card_sidebar .v-tabs-bar.theme--dark .v-tab:not(.v-tab--active):not(.v-tab--disabled){
  color: #534F3B;
}
.card_sidebar .v-tab--active{
  color: #423E28;
}
.card_sidebar .v-list--shaped {
  padding-right: 0px;
}
.card_contacts_sidebar {
  position: fixed;
  top: 0;
  margin-top: 70px;
  right: 0;
  width: auto;
}
.card_sidebar_donator .v-item-group{
  max-height: 200px;
  max-width: 300px;
}
.card_sidebar_donator .v-image{
  max-height: 200px;
  max-width: 100%;
}
.card_sidebar_donator .v-card__title{
  background-color: #63B995;
  color: #423E28;
}



/* Mobile */
.card_sidebar_mobile {
  margin: 15px 0 0 0;
  padding: 0;
}
.card_sidebar_mobile .selected {
  border: 4px solid #1dc8cd;
}
.card_sidebar_mobile .v-avatar img {
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
}
.card_sidebar_mobile .layout {
  height: 80px;
}
.card_sidebar_mobile .v-card {
  margin: 0 10px;
  height: 82px;
  border-radius: 15px;
  overflow-x: auto;
}
.bs_instant_mobile{
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 2rem 1rem 0;
  z-index: 1;
}
.instant_classitems_mobile{
  max-height: 300px;
  overflow-y: scroll;
}
</style>
