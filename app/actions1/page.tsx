"use client";

import applyJob from "./applyjob";

export default function Page() {

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const result = await applyJob(formData);

    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        Apply
      </button>
    </form>
  );
}