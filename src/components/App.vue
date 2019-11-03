<template>
  <div>
    <div id="screen">
      <div id="menubar">
        <div class="mac-btn" id="mac-btn-one"></div>
        <div class="mac-btn" id="mac-btn-two"></div>
        <div class="mac-btn" id="mac-btn-three"></div>
      </div>

      <div id="profiler">
        <form accept-charset="UTF-8" @submit.prevent="getAPI">
          <fieldset>

            <div class="form-group">
              <p>Prueba De API: Ixban Isai Ibañez</p>
            </div>

            <div class="form-group">
              <input class="form-control" placeholder="Id" name="ID" type="text" v-model="task.id" />
            </div>

            <div class="form-group">
              <input class="form-control" placeholder="Text" name="Texto" type="text" v-model="task.text" />
            </div>

            <div class="form-group">
              <input class="form-control" placeholder="Source" name="Source" type="text" v-model="task.source"/>
            </div>

            <div class="form-group">
              <input class="form-control" placeholder="Source_URL" name="Source_URL" type="text" v-model="task.source_url"/>
            </div>

            <button class="btn btn-lg btn-success btn-block" value="Login"><span class="glyphicon btn-glyphicon glyphicon-plus img-circle text-success"></span> Generar</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
class Task {
  constructor(id, text, source, source_url) {
    this.id = id;
    this.text = text;
    this.source = source;
    this.source_url = source_url;
  }
}

export default {
  data() {
    return {
      task: new Task()
    };
  },

  /*created(){
      this.getTask();
  },*/

  methods: {
    getAPI() {
      fetch("https://uselessfacts.jsph.pl/random.json")
        .then(res => res.json())
        .then(data => {
          this.task.id = data.id;
          this.task.text = data.text;
          this.task.source = data.source;
          this.task.source_url = data.source_url;
          this.saveTask();
        });
    },

    saveTask() {
      fetch("/api/task", {
        method: "POST",
        body: JSON.stringify(this.task),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      }).then(res => console.log(res.json().then(data => console.log(data))));
    }
  }
};
</script>