package types

// Task struct represent a Task =]
type Task struct {
	Text       string `json:"text"`
	MissedWord string `json:"missed-word"`
	Checked    bool   `json:"checked"`
}
