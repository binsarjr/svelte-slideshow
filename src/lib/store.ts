import type Reveal from 'reveal.js'
import { writable } from "svelte/store"

export const defaultRevealConfig = writable<Reveal.Options>({})