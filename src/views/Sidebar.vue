<template>
  <div class="sidebar">
    <v-layout v-if="!$vuetify.breakpoint.xs" row wrap>
      <v-col class="card_sidebar" justify="end">
        <v-card max-width="300" title>
          <v-list
            :two-line="twoLine"
            :shaped="shaped"
            :flat="flat"
            :inactive="inactive"
            :nav="nav"
            :avatar="avatar"
          >
            <v-subheader>STORIES</v-subheader>
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
        </v-card>
        <br />
        <v-card max-width="300" tile>
          <v-list
            :two-line="twoLine"
            :shaped="shaped"
            :flat="flat"
            :inactive="inactive"
            :nav="nav"
            :avatar="avatar"
          >
            <v-subheader>IMPORTANT A HLU KHAN</v-subheader>
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
        </v-card>
      </v-col>
    </v-layout>

    <v-layout class="hidden-sm-and-up" row wrap align-center>
      <v-col class="card_sidebar_mobile">
        <v-card :flat="flat" :outlined="outlined" :raised="raised">
          <v-layout>
            <v-avatar class="ma-4" round v-for="(item, i) in items" :key="i">
              <img :class="{ selected: item.selected }" @click="selectedContact(i)" :src="item.avatar" alt="John" />
            </v-avatar>
          </v-layout>
        </v-card>
      </v-col>
    </v-layout>
  </div>
</template>

<script>
// import SidebarMobile from '../components/Sidebar/SidebarMobile.vue';
export default {
  // components: {
  //   SidebarMobile,
  // },
  data: () => ({
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
        selected: false,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        selected: false,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        selected: false,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        selected: false,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        selected: false,
      }
    ]
  }),
  methods: {
    selectedContact(id){
      this.items[this.oldSelectedId].selected = false;
      this.items[id].selected = true;
      this.oldSelectedId = id
    }
  }
};
</script>
<style>
.card_sidebar {
  position: fixed;
  top: 0;
  margin-top: 70px;
  right: 0;
  width: auto;
}
.card_sidebar .v-card {
  margin-right: 5rem;
  border-radius: 15px 15px 5px 5px;
}
.card_sidebar .primary--text {
  height: 270px;
  overflow-y: scroll;
}
.card_sidebar ul {
  list-style-type: none;
}
.card_contacts_sidebar {
  position: fixed;
  top: 0;
  margin-top: 70px;
  right: 0;
  width: auto;
}
.card_sidebar_mobile {
  margin: 15px 0 0 0;
  padding: 0;
}
.card_sidebar_mobile .selected{
  border: 4px solid #1DC8CD;
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
</style>
