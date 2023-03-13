const { createClient } = require('@supabase/supabase-js')
const { faker } = require('@faker-js/faker')

const supabase = createClient(
  'http://localhost:54321',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'
)

async function main() {
  const {
    data: { users },
  } = await supabase.auth.admin.listUsers()

  const { data } = await supabase.from('profiles').select('*')

  for (let index = 0; index < data.length; index++) {
    const profile = data[index]
    const user = users[index]
    const { error } = await supabase
      .from('profiles')
      .update({
        image_url: faker.image.people(500, 500, true),
      })
      .eq('id', profile.id)

    if (error) {
      throw error
    }
  }
}

main()
