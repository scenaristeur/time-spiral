<template>
  <div class="home">
    <div ref="graph"></div>
  </div>
</template>

<script>
import ForceGraph3D from '3d-force-graph';
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const N = 300;
      const gData = {
        nodes: [...Array(N).keys()].map(i => ({ id: i })),
        links: [...Array(N).keys()]
          .filter(id => id)
          .map(id => ({
            source: id,
            target: Math.round(Math.random() * (id - 1))
          }))
      };

      this.Graph = ForceGraph3D()(this.$refs.graph)
        .graphData(gData);
    }
  }
}
</script>
