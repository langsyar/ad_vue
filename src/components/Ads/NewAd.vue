<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form
          ref="form"
          v-model="valid"
          class="mb-3"
          validation>
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            v-model="title"
            :rules="[v => !!v || 'Title is required']"
          ></v-text-field>
          <v-text-field
            name="description"
            label="Ad description"
            type="text"
            v-model="description"
            :rules="[v => !!v || 'Description is required']"
            multi-line
          ></v-text-field>
        </v-form>
        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn class="warning">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex class="xs12">
            <img src="" alt="">
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex class="xs12">
            <v-switch
              label="Add to promo"
              v-model="promo"
              color="primary"
            ></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex class="xs12">
            <v-spacer></v-spacer>
            <v-btn
              class="success"
              :loading="loading"
              :disabled="!valid || loading"
              @click="createAd"
            >
              Create Ad
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				description: '',
				promo: false,
				valid: false,
			}
		},
    computed: {
			loading() {
				return this.$store.getters.loading;
      }
    },
		methods: {
			createAd() {
				if (this.$refs.form.validate()) {
					const ad = {
						title: this.title,
						description: this.description,
						promo: this.promo,
            imageSrc: 'https://avatars.mds.yandex.net/get-pdb/25978/b1d7b1bf-ef42-4dd6-b3db-11397a2514bc/s1200'
					};

					this.$store.dispatch('createAd', ad)
            .then(() => {
            	this.$router.push('/list')
            })
            .catch(() => {})
				}
			}
		}
	}
</script>