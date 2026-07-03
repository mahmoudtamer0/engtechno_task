import styles from './AdmissionSteps.module.css'
type StepType = {
    title: string
    description?: string | null
}

const Step = ({ step, i }: { step: StepType, i: number }) => {
    return (
        <div key={i} className={styles.stepRow}>
            <span className={styles.stepNumber}>{i + 1}</span>
            <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>{step.title}</h4>
            </div>
            <p className={styles.stepDesc}>{step.description}</p>
        </div>
    )
}

export default Step