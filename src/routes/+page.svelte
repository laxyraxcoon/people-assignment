<script>
	import '../app.css';
	import Navbar from './components/Navbar.svelte';
</script>

<main>
	<div class="">
		<Navbar />
	</div>
</main>

<style>
	@font-face {
		font-family: 'Neuzeit', sans-serif;
		src: url('../assets/NeuzeitSLTStd-Book.otf'), format('opentype');
		font-weight: normal;
		font-style: normal;
	}

	* {
		font-family: 'Neuzeit', sans-serif;
		background-color: #201547;
		/* color: #fff; */
		padding: 0;
		margin: 0;
		height: 100vh;
	}
</style>
