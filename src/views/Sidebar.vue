<template>
  <div class="sidebar">
      <v-spacer></v-spacer>
      <v-col class="card_sidebar md-1" align="end" justify="end">
        <v-card max-width="344" class="">
                <v-card-title><h5>Stories</h5></v-card-title>
                <v-card-text>
                    <ul>
                        <li><img src="" alt=""><p>adwdwada</p></li>
                        <li><img src="" alt=""><p>adwdwada</p></li>
                        <li><img src="" alt=""><p>adwdwada</p></li>
                        <li><img src="" alt=""><p>adwdwada</p></li>
                        <li><img src="" alt=""><p>adwdwada</p></li>
                        <li><img src="" alt=""><p>adwdwada</p></li>
                        <li><img src="" alt=""><p>adwdwada</p></li>
                        <li><img src="" alt=""><p>adwdwada</p></li>
                        <li><img src="" alt=""><p>adwdwada</p></li>
                    </ul>
                </v-card-text>
                <v-card-actions>
                <v-btn text>Click</v-btn>
                </v-card-actions>
            </v-card>
      </v-col>
  </div>
</template>

<script>
export default {
  data: () => ({

  }),
};
</script>
<style>
.card_sidebar {
  position: fixed;
  top: 0;
  margin-top: 70px;
}
.card_sidebar ul{
    list-style-type: none;
}
</style>
