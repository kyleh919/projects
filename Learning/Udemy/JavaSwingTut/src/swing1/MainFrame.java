package swing1;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextArea;


// controller - hooking components together and telling them what to do
public class MainFrame extends JFrame
{
   
//   private JTextArea textArea;
   private TextPanel textPanel;
//   private JButton btn;
   private Toolbar toolbar;
   
   public MainFrame() {
      super("Hello World!");
      
      setLayout(new BorderLayout());
      textPanel = new TextPanel();
//      textArea = new JTextArea();
//      btn = new JButton("Click me!");
      toolbar = new Toolbar();
      
//      toolbar.setTextPanel(textPanel);
      toolbar.setStringListener(new StringListener() {

		@Override
		public void textEmitted(String text) {
			textPanel.textAppend(text);
		}
    	  
      });
      
//      btn.addActionListener(new ActionListener() {
//         @Override
//         public void actionPerformed(ActionEvent arg0)
//         {
////            textArea.append("Hello\n");
//    	 		textPanel.textAppend("Click me! button has been clicked...\n");
//         }
//      });
      
      add(toolbar, BorderLayout.NORTH);
//      add(textArea, BorderLayout.CENTER);
      add(textPanel, BorderLayout.CENTER);
//      add(btn, BorderLayout.SOUTH);
      
      setSize(600, 500);
      setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      setVisible(true);
   }
}
