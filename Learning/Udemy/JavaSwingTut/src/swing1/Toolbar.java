package swing1;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JPanel;

public class Toolbar extends JPanel implements ActionListener{
	
	private JButton helloButton;
	private JButton goodbyeButton;
//	private TextPanel textPanel;
	private StringListener textListener;
	
	
	public Toolbar() {
		helloButton = new JButton("Hello");
		goodbyeButton = new JButton("Goodbye");
		
		setLayout(new FlowLayout(FlowLayout.LEFT));
		
		helloButton.addActionListener(this);
		goodbyeButton.addActionListener(this);
		
		add(helloButton);
		add(goodbyeButton);
		
	}
	
	
//	public void setTextPanel(TextPanel textPanel) {
//		this.textPanel = textPanel;
//	}
	
	public void setStringListener(StringListener stringListener) {
		this.textListener = stringListener;
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
//		System.out.println("actionPerformed - Toolbar.java");
//		System.out.println("e.getSource() = " + e.getSource());
//		System.out.println("e.getSource() = " + (JButton)e.getSource());
		
		JButton theButton = (JButton) e.getSource();
		
		if(theButton == helloButton) {
			System.out.println("Hello button clicked");
//			textPanel.textAppend("Hello!\n");
			
			if(textListener != null) {
				textListener.textEmitted("Hello\n");
			}
		}
		else if(theButton == goodbyeButton) {
			System.out.println("Goodbye button clicked");
//			textPanel.textAppend("Goodbye!\n");
			
			if(textListener != null) {
				textListener.textEmitted("Goodbye!\n");
			}
		}
		
	}
}
