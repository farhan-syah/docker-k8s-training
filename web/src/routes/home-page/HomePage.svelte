<script lang="ts">
  import { CourseRepository } from "../../repositories/courses.repository";

  let courseCode: string | undefined = undefined;
  let name: string | undefined = undefined;

  let error: any;
  async function handleClick() {
    error = undefined;
    if (!courseCode || !name) {
      error = "You are required to fill both fields";
      return;
    }
    let data = {
      courseCode,
      name,
    };

    try {
      await CourseRepository.create(data);
      courses = CourseRepository.getAll();
    } catch (e) {
      error = e;
      console.log(e);
    }
  }

  let courses = CourseRepository.getAll();
</script>

<div class="m-8">
  <div class="flex items-end">
    <div class="w-full">
      <div class=" font-bold mb-2">Course Code</div>
      <input type="text" class="rounded w-full" bind:value={courseCode} />
    </div>
    <div class="w-8" />
    <div class="w-full">
      <div class=" font-bold mb-2">Course Name</div>
      <input type="text" class="rounded w-full" bind:value={name} />
    </div>
    <div class="w-8" />
    <button class="bg-indigo-500 p-2 rounded text-white" on:click={handleClick}
      >Add</button
    >
  </div>

  {#if error != undefined}
    <div class="bg-amber-200 p-4 mt-4">
      {error.data?.message ?? error.data?.error ?? error ?? "Unexpected Error"}
    </div>
  {/if}
  <table class="table w-full mt-4">
    <thead>
      <tr>
        <th>ID</th>
        <th>Course Code</th>
        <th>Course Name</th>
      </tr>
    </thead>
    <tbody>
      {#await courses then courses}
        {#each courses as course}
          <tr class="hover">
            <th>{course.id}</th>
            <td>{course.courseCode}</td>
            <td>{course.name}</td>
          </tr>
        {/each}
      {/await}
    </tbody>
  </table>
</div>
