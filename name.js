const coder = {
  name: 'Behnam',
  skills: ['HTML & CSS', 'Tailwind CSS',
  'JavaScript','HTMX'],
  hardWorker: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 4
    );
  }
}