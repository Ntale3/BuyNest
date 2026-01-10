import { create } from 'zustand'

type SidebarState = {
  open: boolean
  toggleSideBar: () => void
}

const useSideBarStore = create<SidebarState>((set) => ({
  open: false,

  toggleSideBar: () =>
    set((state) => ({
      open: !state.open,
    })),
}))

export default useSideBarStore
