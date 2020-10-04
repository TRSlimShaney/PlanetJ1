package view;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.fxml.FXMLLoader;
import javafx.scene.control.Button;
import javafx.scene.image.ImageView;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.HBox;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.stage.Stage;
import model.*;

public class Main extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    private GridPane gridpane = new GridPane();
    private Image[][] displayTiles;
    private ITile[][] units;

    @Override
    public void start(Stage primaryStage) {

        primaryStage.setTitle("Hello World!");

        Button btn1 = new Button();
        btn1.setText("Say 'Hello World'");
        btn1.setOnAction(new EventHandler<ActionEvent>() {

            @Override
            public void handle(ActionEvent event) {
                System.out.println("Button 1 says Hello World!");
            }
        });

        Button btn2 = new Button();
        btn2.setText("Say 'Hello World'");
        btn2.setOnAction(new EventHandler<ActionEvent>() {

            @Override
            public void handle(ActionEvent event) {
                System.out.println("Button 2 says Hello World!");
            }
        });

        gridpane.add(btn1, 0,0, 1, 1);
        gridpane.add(btn2, 0,1,1,1);

        primaryStage.setScene(new Scene(gridpane, 275, 50));
        primaryStage.show();
    }

    private void createGame() {

        displayTiles = new Image[20][13];
        units = new ITile[20][13];

        for (int i = 0; i < 20; i++) {
            for (int z = 0; z < 13; z++) {
                Image defaultImage = new Image("Grass.png");
                displayTiles[i][z] = defaultImage;
                gridpane.add(new ImageView(defaultImage), 1 + i, 2 + z);
            }
        }
    }
}