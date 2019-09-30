<template>
    <example-component></example-component>
    <add-coin></add-coin>
</template>
<script>
    import ExampleComponent from './components/ExampleComponent';
    import AddCoin from './components/AddCoin';
    export default {
        components:{
            exampleComponent: ExampleComponent,
            addCoin: AddCoin,
        }
    }
</script>

<style>

</style>