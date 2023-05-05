<script lang="ts">
    export let partner: string[];
</script>

<section>
    <h2>{partner.join(' + ')} = <span class="heart">&#x2764</span></h2>
    <p class="text-pink-500">Lets have fun!</p>
</section>

<style>
    .heart {
        color: #f44133;
    }
</style>