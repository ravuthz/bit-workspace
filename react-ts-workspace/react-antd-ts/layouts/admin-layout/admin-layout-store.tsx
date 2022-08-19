import { MenuTheme } from 'antd/lib/menu';
import { atom, WritableAtom } from 'jotai';

export function atomWithToggle(
    initialValue?: boolean
): WritableAtom<boolean, boolean | undefined> {
    const anAtom = atom(initialValue, (get, set, nextValue?: boolean) => {
        const update = nextValue ?? !get(anAtom)
        set(anAtom, update)
    })

    return anAtom as WritableAtom<boolean, boolean | undefined>
}

const config: {
    theme: MenuTheme,
    showSetting: boolean,
    showFixHeader: boolean,
    showFixSideBar: boolean,
    showSideBarLogo: boolean,
    collapsedSideBar: boolean,
} = {
    theme: 'dark',
    showSetting: false,
    showFixHeader: false,
    showFixSideBar: false,
    showSideBarLogo: true,
    collapsedSideBar: true
};

const adminLayoutConfigAtom = atom(config);

if (process.env.NODE_ENV !== 'production') {
    adminLayoutConfigAtom.debugLabel = 'admin-layout-config'
}

export { adminLayoutConfigAtom };

