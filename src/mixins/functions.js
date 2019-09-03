/* eslint-disable import/prefer-default-export */
export const utils = {
  methods: {
    redirect(pattern, option = 'path') {
      if (option == 'path') this.$router.push(pattern);
      else if (option == 'name') this.$router.push({
        name: pattern,
      });
    },
  },
};
