'use client'
import styles from './skills.module.css'
import { useState } from "react";
import Tag from "../../../components/tags/Tag";
import { motion } from 'framer-motion';

type SkillPropsType = {
    children: React.ReactNode,
    tags: Array<{ title: string }>
}

export function Skills({ children, tags }: SkillPropsType) {
    const [open, setOpen] = useState<boolean>(false);
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    const singleTag = [];
    if (tags != undefined) {
        for (const tag of tags) {
            singleTag.push(tag.title);
        }
    }
    const openSkills = () => {
        setOpen(!open);
    };

    return (
        <>
            <div onClick={openSkills} className={styles.container}>
                <span className={styles.titleSkill}>{children}</span>
                {open && <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={container}
                    className={styles.containetItem}>
                    {
                        singleTag.map((tag, i) => (
                            <motion.span
                                variants={item}
                                key={i}
                                className={styles.items} >
                                {tag}
                            </motion.span>
                        ))}
                </motion.div>}
            </div>
        </>
    );
}