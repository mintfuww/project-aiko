basic.forever(function () {
    if (reromicro.ReadUltrasonic() <= 20) {
        reromicro.Brake()
    } else {
        reromicro.MoveForward(50)
        if (reromicro.LineSensorDetectsLine(LineSensors.Left) && (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
            reromicro.MoveForward(35)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
            reromicro.RunMotor(Motors.Left, 0)
            reromicro.RunMotor(Motors.Right, 35)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
            reromicro.RunMotor(Motors.Left, 35)
            reromicro.RunMotor(Motors.Right, 0)
        } else {
            reromicro.Brake()
        }
    }
})
