import create from 'zustand'
import { data } from 'data'

export const useData = create(
	set => ({
		day: null,
		turns: data,
		turnsDay: [],
		setTurns: (res) => set(() => ({ turns: res })),
		setTurnsDay: (day) => set(({ turns }) => ({ turnsDay: turns[day] ?? [], day })),
		deleteTurn: (id) => set(({ day, turns, turnsDay }) => {
			const filteredTurns = turnsDay?.filter(turn => turn.id !== id)
			turns[day] = filteredTurns
			return {
				turnsDay: filteredTurns
			}
		}),
		createTurn: (name, email, hour, day) => set(({ turns }) => {
			const newTurn = {
				id: Math.random().toString(36).substring(2, 8),
				name,
				contact: email,
				schedule: Number(hour)
			}

			const addTurn = [...turns[day], newTurn]
			turns[day] = addTurn
		})
	})
)
