import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "bz7czgy8",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})

export const writeClient = createClient({
    token: "skF4eVIKWkqwzj2AifhB6mZgLirsVtJUU4Bqj1CMArvf2rNnD7PVfNeZvaUew4HiZi2gdK95EQqkobRJwnVdVA4kWZU918s5u3B2VE3pomLARI4ft3Vpa3tuA6NdM6X6Fvdyu7q9Ec92laLb45TNkgvLAsp7Iq2PnhAcF4LAxybV1YIvh0Wk",
    projectId: "bz7czgy8",
    dataset: "production"
})