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
		})
	})
)
