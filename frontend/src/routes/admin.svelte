<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Universal booking and schedule app</title>
</svelte:head>

<h1>Admin panel</h1>

<form
    method="POST"
    action="/api/add-task"
>
    <label>
        Текст:
        <input name="text">
    </label>
    <label>
        Пропущенное слово:
        <input name="missed-word">
    </label>
    <p>
        Варианты:
        <input name="options">
        <input name="options">
        <input name="options">
        <input name="options">
    </p>
    <button>Add</button>
</form>
