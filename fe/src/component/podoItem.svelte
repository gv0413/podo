<script>
  let fill = false
  const 색칠 = () => fill = true
</script>

<div class="hbox pack r(50) b(#ccc) w(100px) h(100px) .fill:bg(#BA55D3) .fill:c(#fff)" class:fill on:click={색칠}>포도</div>